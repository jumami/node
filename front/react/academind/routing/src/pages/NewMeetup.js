import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){
    const history = useHistory();
    function addMeetupHandler(meetupData){
        fetch(
            'https://academind-react-e9e23-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-type':'application/json'
                }
            }
        ).then(()=>{
            history.replace('/')
        });
    }
    return <section>
        <h2>Add New Meetup</h2>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetupPage;