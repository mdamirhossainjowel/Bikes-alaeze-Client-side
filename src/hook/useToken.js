import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken]=useState('');

    useEffect(() => {
        const email=user?.user?.email;
    
      
        const currentuser={email: email};
        console.log(currentuser);
       if(email)
       {
        fetch(`http://localhost:5000/user/${email}`,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(currentuser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const accessToken=data.token;
            localStorage.setItem('accesstoken',accessToken)
            setToken(accessToken)})
        
       }
    }, [user]);

    return [token];
}

export default useToken