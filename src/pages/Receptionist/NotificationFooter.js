import React, {useState, useEffect} from "react";
import {Link, Route, Switch} from "react-router-dom";
import {Dropdown, DropdownToggle, DropdownMenu, Row, Col} from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
//Import scss
import "../../assets/scss/custom/pages/receptionist/receptionist.scss";
import {connect} from "react-redux";
import * as actions from "../../store/receptionist/actions";
import firebase from '../../helpers/firebase';


//i18n
import {withNamespaces} from "react-i18next";
import NotificationCardFooter from "./NotificationCardFooter";
import useSound from "use-sound";
import notiAudio from "../../assets/audio/discord-notification.mp3";

const NotificationFooter = (props) => {
    // Declare a new state variable, which we'll call "menu"
    const [menu, setMenu] = useState(false);

    const handleChangeMenu = (value) => {
        setMenu(value);
    };

    const [todoList, setTodoList] = useState(0);
    const [todoData, setTodoData] = useState();

    const [notiOn] = useSound(
        notiAudio,
        { volume: 1 }
    );

    useEffect(() => {
        const todoRef = firebase.database().ref('receptionist');
        todoRef.on('value', (snapshot) => {
            setTodoList(snapshot.numChildren());
            if(snapshot.numChildren() > 0){
                setMenu(true);
                notiOn()
            }else{
                setMenu(false);
            }
            const todos = snapshot.val();
            const todoData = [];
            for (let id in todos) {
                todoData.push({ id, ...todos[id] });
            }
            setTodoData(todoData);
        });
    }, []);
    console.log("notiFirebase noti: "+ todoData);
    // console.log("page: "+ (props?.allNotificationReceptionist?.total % pageSize) )

    return (
        <>
            {(todoList !== 0) ? (
                <>
                    <Dropdown
                        isOpen={menu}
                        toggle={() => {
                            setMenu(!menu)
                        }}
                        className="dropdown d-inline-block"
                        tag="li"
                    >
                        <DropdownToggle
                            className="btn header-item noti-icon waves-effect"
                            tag="button"
                            id="page-header-notifications-dropdown"
                            style={{backgroundColor:'#eff2f7'}}
                        >
                        </DropdownToggle>

                        <DropdownMenu
                            className="dropdown-menu dropdown-menu-lg dropdown-thanks-notification p-0"
                            left
                            style={{backgroundColor:'#eff2f7'}}
                        >
                            <PerfectScrollbar>
                                {todoData
                                    ? todoData.map((todo, index) => (
                                        <NotificationCardFooter
                                            key={todo._id}
                                            data={todo}
                                            userId={todo.user_id}
                                            menu={handleChangeMenu}
                                        />
                                    ))
                                    : ''}
                            </PerfectScrollbar>
                            <audio src={require(`../../assets/audio/discord-notification.mp3`)}
                                   autoPlay={menu}
                            />
                        </DropdownMenu>
                    </Dropdown>
                </>
            ) : (
                null
            )}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        // totalsOfNotification:
        // state.Notification.totalOfNotifications.totalNotifications,
        // allNotificationReceptionist: state.Receptionist.getAllNotificationsReceptionist.allNotificationsReceptionist,
    };
};

export default withNamespaces()(connect(mapStateToProps)(NotificationFooter));