import React, { useContext }from 'react'
import { Link } from "react-router-dom"
import UserContext from "../../context/User/UserContext"



export default function EditProfile() {
    //ESTADO GLOBAL
    let navigate = useNavigate();
    const params = useParams();
    const idUser = params.id;
    const ctx = useContext(UserContext);
    const { currentUser, updateProfile } = ctx;

    //ESTADO LOCAL
    const [userData, setUserData] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        pais: "",
        userImage: "",
        bio: "",
      });


    useEffect(() => {
        const { nombre, apellido, telefono, pais, userImage, bio } =
            currentUser;

        setUserData({
            nombre: nombre ,
            apellido: apellido ,
            telefono: telefono, 
            pais: pais ,
            userImage: userImage ,
            bio: bio
        });
    }, [currentUser]);
    

    const handleChange = (e) => {
        e.preventDefault();
    
        setUserData({
          ...userData,
          [e.target.nombre]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        updateProfile(userData, idUser);
        navigate("/profile");
      };


    return (
        <div>
            Editar perfil
        </div>
    )
}
