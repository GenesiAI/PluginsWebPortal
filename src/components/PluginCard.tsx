import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
}));
interface PluginCardProps {
  plugin: {
    iconUrl: string;
    category: string;
    categoryLink: string;
    title: string;
    description: string;
    link: string;
  };
}

const PluginCard: React.FC<PluginCardProps> = ({ plugin }) => {
  const classes = useStyles();

  const handleClick = () => {
    window.open(plugin.link, '_blank');
  };

  return (
    <Card className={classes.card} onClick={handleClick}>
      <CardActionArea>
        <CardContent>
          <img src={plugin.iconUrl} alt={`${plugin.title} icon`} />
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {plugin.category}
          </Typography>
          <Typography variant="h5" component="h2">
            {plugin.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {plugin.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PluginCard;
