import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image'
import { FaUserFriends, FaStar, FaPencilAlt } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/user";

import Friends from './Friends'
import Favorites from './Favorites';

const Profile = () => {
  const [showFriends, setShowFriends] = useState(false)
  const [showFavs, setShowFavs] = useState(false)

  let Navigate = useNavigate()
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user)

  return (
    <div className="text-center mt-3">
      <Image style={{ width: "60%", height: 'auto', maxWidth: "400px" }} roundedCircle="true" thumbnail="true" src={user.imgUrl} />

      <Card.Body>
        <Card.Title>{user.name} {user.surname}</Card.Title>
      </Card.Body>
      <ListGroup>
        <ListGroup.Item>{user.email}</ListGroup.Item>
        <ListGroup.Item>{user.mainOffice}</ListGroup.Item>
        <ListGroup.Item>{user.position}</ListGroup.Item>
      </ListGroup>

      <dt style={{ paddingTop: "5px", marginTop: "2vh" }}>
        <button style={{ maxWidth: "400px" }} onClick={() => setShowFriends(true)} className="main-button"> <FaUserFriends /> Amigos </button>
      </dt>
      <dt style={{ paddingTop: "5px" }}>
        <button style={{ maxWidth: "400px" }} onClick={() => setShowFavs(true)} className="main-button"> <FaStar /> Favoritos </button>
      </dt>
      <dt style={{ paddingTop: "5px" }}>
        <button style={{ maxWidth: "400px" }} className="main-button-black" onClick={() => Navigate("/editprofile")}> <FaPencilAlt /> Editar </button>
      </dt>


      <Friends show={showFriends} setShow={setShowFriends} />
      <Favorites show={showFavs} setShow={setShowFavs} />
    </div>
  )
}


export default Profile