import React, {useState} from "react";



function ProfileDataPage() {

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    

    return (
        <div>
            <h2>Profile Data</h2>
            <div>
                <form>
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
                </form>
            </div>
        </div>
    );
}

epxort default ProfileDataPage;