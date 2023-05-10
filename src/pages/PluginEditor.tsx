import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plugin, PluginApi } from '../apis/api';
import React from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';

const PluginEditor: React.FC<{}> = () => {
    const navigate = useNavigate();
    const { guid } = useParams();
    const [plugin, setPlugin] = useState<Plugin | null>(null);
    const [error, seterror] = useState<string | null>(null);

    var mockedUserId = '3fa85f64-5717-4562-b3fc-2c963f66afa6';

    React.useEffect(() => {
        if (!localStorage.getItem('X')) {
            navigate('/');
        }
        if (!guid) {
            seterror('Something went wrong.');
        }

        const fetchPlugin = async () => {
            const pluginApi = new PluginApi();
            try {
                const response = await pluginApi.pluginUserIdPluginIdGet(mockedUserId, guid!);
                if (!response.data) {
                    seterror('Something went wrong.');
                }
                console.log("response: " + response?.data);
                setPlugin(response?.data);
            } catch (error) {
                seterror('Something went wrong.');
            }
        };
    
        console.log("plugin: " + plugin);
        if (!plugin)
            fetchPlugin();
    }, [guid, navigate, setPlugin, seterror, plugin, mockedUserId]);



    // const DeletePlugin = async () => {
    //     const pluginApi = new PluginApi();
    //     try {
    //         const response = await pluginApi.pluginUserIdPluginIdDelete(mockedUserId, guid!);
    //         if (!response.data) {
    //             seterror('Something went wrong.');
    //         }
    //         console.log("response: " + response?.data);
    //         setPlugin(response?.data);
    //     } catch (error) {
    //         seterror('Something went wrong.');
    //     }
    // };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, property: keyof Plugin) => {
        setPlugin({ ...plugin!, [property]: e.target.value });
    };

    // const DeletePlugin = (property: keyof Plugin) => {
    //     //todo add a confirmation dialog
    //     DeletePlugin({});
    // }

    return (
        <div>
            <h1>{error}</h1>
            {plugin ? (
                <Box sx={{ margin: '16px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="standard"
                                fullWidth
                                label="Name for Human"
                                value={plugin.nameForHuman || ''}
                                onChange={(e) => handleInputChange(e, 'nameForHuman')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="standard"
                                fullWidth
                                label="Name for Model"
                                value={plugin.nameForModel || ''}
                                onChange={(e) => handleInputChange(e, 'nameForModel')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={2}
                                label="Description for Human"
                                value={plugin.descriptionForHuman || ''}
                                onChange={(e) => handleInputChange(e, 'descriptionForHuman')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={2}
                                label="Description for Model"
                                value={plugin.descriptionForModel || ''}
                                onChange={(e) => handleInputChange(e, 'descriptionForModel')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                variant="standard"
                                fullWidth
                                label="Logo URL"
                                value={plugin.logoUrl || ''}
                                onChange={(e) => handleInputChange(e, 'logoUrl')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="standard"
                                fullWidth
                                label="Contact Email"
                                value={plugin.contactEmail || ''}
                                onChange={(e) => handleInputChange(e, 'contactEmail')}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="standard"
                                fullWidth
                                label="Legal Info URL"
                                value={plugin.legalInfoUrl || ''}
                                onChange={(e) => handleInputChange(e, 'legalInfoUrl')}
                            />
                        </Grid>
                        {plugin.sections?.map((section, index) => (
                            <React.Fragment key={index}>
                                <Box margin={2}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6} >
                                            <TextField
                                                variant="standard"
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
                                        <Grid item xs={12} sm={12}>
                                            <TextField
                                                variant="outlined"
                                                fullWidth
                                                multiline
                                                rows={2}
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
                                        <Grid item xs={12} sm={12}>
                                            <TextField
                                                variant="outlined"
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
                                    </Grid>
                                </Box>
                            </React.Fragment>
                        ))}
                        <Grid item xs={12} container justifyContent="center">
                            <Button
                                variant="text"
                                color="primary"
                                startIcon={<AddIcon />}
                                onClick={() =>
                                    setPlugin({
                                        ...plugin,
                                        sections: [...(plugin.sections || []), { name: '', description: '', content: '' }],
                                    })
                                }
                            >
                                Add Section
                            </Button>
                        </Grid>
                        <Grid item xs={12} container justifyContent="space-between">
                            {/* <Button
                                variant="contained"
                                color="error"
                                startIcon={<DeleteIcon />}
                                onclick={() => DeletePlugin(...plugin)}
                            >
                                Delete
                            </Button> */}
                            <Button variant="contained" color="success" startIcon={<SaveIcon />}>
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            ) : null
            }
        </div >
    );
};

export default PluginEditor;

