import React, {useState} from "react";
import { useNavigate } from "react-router-dom"
function ProfileDataPage() {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        age: '',
        height: '',
        weight: '',
        gender: '',
        activity: '',
        goal: '',
        diet: ''
    })
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(formState)
            //send update request to backend
            // const { data } = await updateProfileData({
            //     variables: { ...formState },
            //   });
            navigate('/nutrition')
        } catch {
            console.log("error")
        }
    }

    return (
        <div>
            <h2>Profile Data</h2>
            <div>
                <form onSubmit={handleFormSubmit}>
                   <div>
                    <label htmlFor="age">Age: </label>
                    <input type="text" name="age" onChange={handleChange}/>
                    </div>  
                    <div>
                      <label htmlFor="height">Height: </label>
                      <input type="text" name="height" onChange={handleChange}/>
                    </div> 
                     <div>
                         <label htmlFor="weight">Weight: </label>
                         <input type="text" name="weight" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="gender">Gender: </label>
                        <input type="text" name="gender" onChange={handleChange}/>
                    </div>   
                    <div>
                        <label htmlFor="activity">Activity: </label>
                        <input type="text" name="activity" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="goal">Goal: </label>
                        <input type="text" name="goal" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="diet">Diet: </label>
                        <input type="text" name="diet" onChange={handleChange}/>
                    </div>                  
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default ProfileDataPage;