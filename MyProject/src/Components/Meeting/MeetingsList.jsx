import { observer } from 'mobx-react';
import dataStore from '../../store/store.js';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { isToday, isThisWeek } from 'date-fns';
import { useEffect } from 'react';
import { getMeetings } from '../../store/server.js';

const theme = createTheme();

const MeetingsList = (observer(() => {

    useEffect(() => {
        getMeetings();
    }, []);

    const getTime = (dateTime) => {
        const date = new Date(dateTime);
        const formattedDate = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        }).format(date);
        return formattedDate;
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                {dataStore.meetings.map((meeting, index) => {
                    const meetingDate = new Date(meeting.dateTime);
                    let backgroundColor = 'green';
                    if (isToday(meetingDate)) {
                        backgroundColor = 'red';
                    } else if (isThisWeek(meetingDate)) {
                        backgroundColor = 'orange';
                    }
                    return <>
                        <Card key={index} sx={{ maxWidth: 300 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">{meeting.typeService}</Typography>
                                <Typography variant="h5" component="div">{meeting.name}</Typography>
                                <Typography variant="body2">{meeting.phone}<br /></Typography>
                                <Typography variant="body2">{meeting.email}<br /></Typography>
                                <Typography variant="body2" backgroundColor={backgroundColor}><div>{getTime(meeting.dateTime)}</div></Typography>
                            </CardContent>
                        </Card>
                    </>
                })}
            </ThemeProvider>
        </>
    )
}))

export default MeetingsList
