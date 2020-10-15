import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'

function InfoBox({title, cases, total}) {
    return (
      <Card className="infoBox">
        <CardContent>
          {/* title */}
          <Typography className="infoBox__title" color="textSecondary">
            {title}
          </Typography>
          {/* number */}
          <h2> {cases} </h2>
          <Typography className="infoBox__total" color="textSecondary">
            {total} Total
          </Typography>
        </CardContent>
      </Card>
    );
}

export default InfoBox
