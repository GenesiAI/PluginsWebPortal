import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plugin, PluginApi } from '../apis/api';
import React from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const PluginEditor: React.FC<{}> = () => {
    const navigate = useNavigate();
    const { guid } = useParams();
    const [plugin, setPlugin] = useState<Plugin | null>(null);

    var mockedUserId = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    var error: string | undefined;

    React.useEffect(() => {
        if (!localStorage.getItem('X')) {
            navigate('/');
        }
        if (!guid) {
            error = 'Something went wrong.';
        }

        const fetchPlugin = async () => {
            const pluginApi = new PluginApi();
            try {
                const response = await pluginApi.pluginUserIdPluginIdGet(mockedUserId, guid!);
                if (!response.data) {
                    error = 'Something went wrong.';
                }
                console.log(response?.data);
                setPlugin(response?.data);
            } catch (error) {
                error = 'Something went wrong.';
            }
        };
        
        console.log(plugin);
        if (!plugin)
            fetchPlugin();
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, property: keyof Plugin) => {
        setPlugin({ ...plugin!, [property]: e.target.value });
    };

    return (
        <div>
            {plugin && (
                <Box sx={{ margin: '16px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Name for Human"
                                value={plugin.nameForHuman || ''}
                                onChange={(e) => handleInputChange(e, 'nameForHuman')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Name for Model"
                                value={plugin.nameForModel || ''}
                                onChange={(e) => handleInputChange(e, 'nameForModel')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Description for Human"
                                value={plugin.descriptionForHuman || ''}
                                onChange={(e) => handleInputChange(e, 'descriptionForHuman')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Description for Model"
                                value={plugin.descriptionForModel || ''}
                                onChange={(e) => handleInputChange(e, 'descriptionForModel')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Logo URL"
                                value={plugin.logoUrl || ''}
                                onChange={(e) => handleInputChange(e, 'logoUrl')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Contact Email"
                                value={plugin.contactEmail || ''}
                                onChange={(e) => handleInputChange(e, 'contactEmail')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Legal Info URL"
                                value={plugin.legalInfoUrl || ''}
                                onChange={(e) => handleInputChange(e, 'legalInfoUrl')}
                            />
                        </Grid>
                        {/* Section editing */}
                        {plugin.sections?.map((section, index) => (
                            <React.Fragment key={index}>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        fullWidth
                                        label="Section Name"
                                        value={section.name || ''}
                                        onChange={(e) =>
                                            setPlugin({
                                                ...plugin,
                                                sections: plugin.sections!.map((s, i) => (i === index ? { ...s, name: e.target.value } : s)),
                                            })
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        fullWidth
                                        label="Section Description"
                                        value={section.description || ''}
                                        onChange={(e) =>
                                            setPlugin({
                                                ...plugin,
                                                sections: plugin.sections!.map((s, i) =>
                                                    i === index ? { ...s, description: e.target.value } : s,
                                                ),
                                            })
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        fullWidth
                                        label="Section Content"
                                        multiline
                                        rows={4}
                                        value={section.content || ''}
                                        onChange={(e) =>
                                            setPlugin({
                                                ...plugin,
                                                sections: plugin.sections!.map((s, i) =>
                                                    i === index ? { ...s, content: e.target.value } : s,
                                                ),
                                            })
                                        }
                                    />
                                </Grid>
                            </React.Fragment>
                        ))}
                        <Grid item xs={12} container justifyContent="center">
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<AddIcon />}
                                onClick={() => setPlugin({ ...plugin, sections: [...(plugin.sections || []), { name: '', description: '', content: '' }] })}
                            >
                                Add Section
                            </Button>
                        </Grid>
                        <Grid item xs={12} container justifyContent="space-between">
                            <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
                                Delete
                            </Button>
                            <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </div>
    );
};

export default PluginEditor;

