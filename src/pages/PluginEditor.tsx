import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plugin, PluginApi, PluginUpdateRequest } from '../apis/api';
import React from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import PluginSections from '../components/PluginSections';
import { CircularProgress } from '@mui/material';
import AlertDialog from '../components/AlertDialog';

const PluginEditor: React.FC<{}> = () => {
    const navigate = useNavigate();
    const { guid } = useParams();
    const [plugin, setPlugin] = useState<Plugin | null>(null);
    const [error, seterror] = useState<string | null>(null);
    const [saveInProgress, setSaveInProgress] = useState(false);
    const [deleteInProgress, setDeleteInProgress] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    React.useEffect(() => {
        // if (!localStorage.getItem('X')) {
        //     navigate('/');
        // }
        if (!guid) {
            seterror('Something went wrong.');
        }

        const fetchPlugin = async () => {
            const pluginApi = new PluginApi();
            try {
                const response = await pluginApi.apiPluginsPluginIdGet(guid!);
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
    }, [guid, navigate, setPlugin, seterror, plugin]);


    const savePlugin = async () => {
        setSaveInProgress(true);
        const pluginApi = new PluginApi();
        try {
            var pluginupdate: PluginUpdateRequest = {
                nameForHuman: plugin?.nameForHuman,
                nameForModel: plugin?.nameForModel,
                descriptionForHuman: plugin?.descriptionForHuman,
                descriptionForModel: plugin?.descriptionForModel,
                logoUrl: plugin?.logoUrl,
                contactEmail: plugin?.contactEmail,
                legalInfoUrl: plugin?.legalInfoUrl,
                sections: plugin?.sections,
            }

            await pluginApi.apiPluginsPluginIdPut(guid!, pluginupdate);
        } catch (error) {
            // Error: you can show an error message or perform any other action here
        } finally {
            setSaveInProgress(false);
        }
    };

    const deletePlugin = async () => {
        setShowDeleteDialog(false);
        setDeleteInProgress(true);
        const pluginApi = new PluginApi();
        try {
            await pluginApi.apiPluginsPluginIdDelete(guid!);
            navigate('/your-plugins');
        } catch (error) {
            // Error: you can show an error message or perform any other action here
        } finally {
            setDeleteInProgress(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, property: keyof Plugin) => {
        setPlugin({ ...plugin!, [property]: e.target.value });
    };

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
                        <PluginSections plugin={plugin!} setPlugin={setPlugin} />
                        <Grid item xs={12} sm={12} container justifyContent="center">
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
                        <Grid item xs={12} sm={12} container justifyContent="space-between">
                            <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => setShowDeleteDialog(true)}>
                                {deleteInProgress ? <CircularProgress size={24} sx={{ color: (theme) => theme.palette.error.contrastText }} /> : 'Delete'}
                            </Button>
                            <Button variant="contained" color="success" startIcon={<SaveIcon />} onClick={savePlugin}>
                                {saveInProgress ? <CircularProgress size={24} sx={{ color: (theme) => theme.palette.success.contrastText}} /> : 'Save'}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            ) : null
            }
            <AlertDialog open={showDeleteDialog} setOpen={setShowDeleteDialog} onConfirm={deletePlugin} />
        </div >
    );
};

export default PluginEditor;

