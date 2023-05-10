// PluginSections.tsx
import React from 'react';
import { Plugin, Section } from '../apis/api';
import { Box, Grid, TextField } from '@mui/material';

interface PluginSectionsProps {
    plugin: Plugin;
    setPlugin: React.Dispatch<React.SetStateAction<Plugin | null>>;
}

const PluginSections: React.FC<PluginSectionsProps> = ({ plugin, setPlugin }) => {
    return (
        <>
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
        </>
    );
};

export default PluginSections;
