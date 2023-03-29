import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});

interface PluginCardProps {
  title: string;
  category: string;
  description: string;
  onClick: () => void;
}

const PluginCard: React.FC<PluginCardProps> = ({ title, category, description, onClick }) => {
    const classes = useStyles();
  
    return (
      <Card className={classes.card} onClick={onClick}>
        <CardActionArea>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {category}
            </Typography>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };
  
  export default PluginCard;
  