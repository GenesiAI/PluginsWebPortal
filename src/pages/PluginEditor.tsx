import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plugin, PluginApi, Section } from '../apis/api';
import React from 'react';
import './PluginEditor.css';

const PluginEditor: React.FC<{}> = () => {
    const navigate = useNavigate();
    const { guid } = useParams();
    const [plugin, setPlugin] = useState<Plugin | null>(null);
    const [error, setError] = useState<string | null>(null);

    var mockedUserId = '3fa85f64-5717-4562-b3fc-2c963f66afa6';

    useEffect(() => {
        if (!localStorage.getItem('X')) {
            navigate('/');
        }
        if (!guid) {
            setError('Something went wrong.');
        }

        const fetchPlugin = async () => {
            const pluginApi = new PluginApi();
            try {
                const response = await pluginApi.pluginUserIdPluginIdGet(mockedUserId, guid!);
                if (!response.data) {
                    setError('Something went wrong.');
                }
                setPlugin(response.data);
            } catch (error) {
                setError('Something went wrong.');
            }
        };

        fetchPlugin();
    }, []);

    const renderSection = (section: Section, index: number, onChange: (value: Section, index: number) => void) => {
        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: keyof Section) => {
            const newSection: Section = {
                ...section,
                [key]: event.target.value,
            };
            onChange(newSection, index);
        };

        return (
            <div key={index} className="section">
                <label>Name</label>
                <input type="text" value={section.name || ''} onChange={(e) => handleInputChange(e, 'name')} />

                <label>Description</label>
                <input type="text" value={section.description || ''} onChange={(e) => handleInputChange(e, 'description')} />

                <label>Content</label>
                <textarea value={section.content || ''} onChange={(e) => handleInputChange(e, 'content')} />
            </div>
        );
    };

    return (
        <div>
            {error ? (
                <div>{error}</div>
            ) : (
                <>
                    {plugin &&
                        plugin.sections &&
                        plugin.sections.map((section, index) => renderSection(section, index, (value, idx) => {
                            const newSections = [...plugin.sections!];
                            newSections[idx] = value;
                            setPlugin({ ...plugin, sections: newSections });
                        }))}

                    <button
                        className="add-section"
                        onClick={() =>
                            setPlugin({ ...plugin!, sections: [...(plugin!.sections || []), { name: '', description: '', content: '' }] })
                        }
                    >
                        +
                    </button>

                    <button
                        className="save-plugin"
                        onClick={async () => {
                            const pluginApi = new PluginApi();
                            try {
                                await pluginApi.pluginUserIdPluginIdPut(mockedUserId, guid!, plugin!);
                                alert('Plugin saved successfully.');
                            } catch (error) {
                                setError('Error saving the plugin.');
                            }
                        }}
                    >
                        Save
                    </button>

                    <button
                        className="delete-plugin"
                        onClick={async () => {
                            const pluginApi = new PluginApi();
                            try {
                                await pluginApi.pluginUserIdPluginIdDelete(mockedUserId, guid!);
                                alert('Plugin deleted successfully.');
                                navigate('/plugins');
                            } catch (error) {
                                setError('Error deleting the plugin.');
                            }
                        }}
                    >
                        Delete
                    </button>
                </>
            )}
        </div>
    );
}
export default PluginEditor;

