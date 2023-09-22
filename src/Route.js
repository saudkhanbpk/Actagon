import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Logo from "./components/Logo/Logo";
// import Signup from './components/Signup/Signup'
import Phonelogin from "./components/Phonelogin/Phonelogin";
import Textcode from "./components/Textcode/Textcode";
import Signup from "./components/Signup-for-number/Signup";
import SignupCode from "./components/Signup-cod-number/Signup";
import LoginCode from "./components/Login-code/LoginCode";
import EmailCode from "./components/Emailed-Code/EmailCode";
import ActivityScreen from "./components/ActivityScreen/ActivityScreen";
import SignupEmail from "./components/SignupEmail/SignupEmail";
import User from "./components/UserName/User";
import ChangeUserName from "./components/ChangeUserName/ChangeUserName";
import UpdateProfilePicture from "./components/updateProfilePic/UpdateProfilePicture";
import Profile from "./components/profile/Profile";
import BottomNavigation from "./components/bottomNavigation/BottomNavigation";
import Friends from "./components/friends/Friends";
import Search from "./components/search/Search";
import YouUserName from "./components/YourUserName/YourUserName";
import PaymentsEmpty from "./components/Payments/PaymentsEmpty/PaymentsEmpty";
import Transition from "./components/Payments/Transactions/Transactions";
import ProfileView from "./components/profileView/ProfileView";
import Register from "./pages/Register/Register";
import Login from "./pages/login/Login";
import Message from "./components/Messages/Message";
import Chats from "./components/Chats/Chats";
import NewMessages from "./components/NewMessages/NewMessages";
import Poll from "./components/Poll/Poll";
import ChatScreen from "./components/ChatScreen/ChatScreen";
import AddCard from "./components/Payments/AddCard/AddCard";
import Pay from "./components/Payments/Pay/Pay";
import AmountToPay from "./components/Payments/AmountToPay/AmountToPay";
import Request from "./components/Payments/Request/Request";
import AmountToRequset from "./components/Payments/AmountToRequest/AmountToRequest";
import SplitPayment from "./components/Payments/SplitPayment/SplitPayment";
import SplitAmount from "./components/Payments/SplitAmount/SplitAmount";
import SlipPayment from "./components/Payments/SlipPayment/SlipPayment";
import DateSelSchedul from "./components/Payments/DateSelSchedul/DateSelSchedul";
import GroupChat from "./components/GroupChat/GroupChat";
import { io } from "socket.io-client";
import Location from "./components/Location/Location";
import ShareNavigation from "./components/ShareNavigation/ShareNavigation";
import ShareLocation from "./components/ShareLocation/ShareLocation";
import InviteFriends from "./components/InviteFriends/InviteFriends";
import SelectPeople from "./components/SelectPeople/SelectPeople";
import AddSchedule from "./components/AddSchedule/AddSchedule";
import AddToList from './components/AddToList/AddToList';
import EmptySchedules from './components/EmptySchedules/EmptySchedules';
import Schedules from './components/Schedules/Schedules';
function Router() {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const getToken = () => {
    const tokenString = localStorage.getItem("loginToken");
    setToken(tokenString);
  };
  useEffect(() => {
    getToken();
  }, []);

  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState({});
  const [message, setMessage] = useState("");
  const [idCon, setIdCon] = useState("");
  const [recive, setRecive] = useState("");
  const [users, setUsers] = useState([]);
  const [socket, setSocket] = useState(null);
  const messageRef = useRef(null);
  useEffect(() => {
    setSocket(io("http://localhost:8080"));
  }, []);

  useEffect(() => {
    socket?.emit("addUser", user?._id);
    socket?.on("getUsers", (users) => {
      console.log("activeUsers :>> ", users);
    });
    socket?.on("getMessage", (data) => {
      setMessages((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          { user: data.user, message: data.message },
        ],
      }));
    });
  }, [socket]);

  useEffect(() => {
    messageRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages?.messages]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    const fetchConversations = async () => {
      const res = await fetch(
        `http://localhost:4000/api/v1/conversation/${loggedInUser?._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resData = await res.json();
      setConversations(resData);
    };
    fetchConversations();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`http://localhost:4000/api/users/${user?._id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resData = await res.json();
      setUsers(resData);
    };
    fetchUsers();
  }, []);

  const fetchMessages = async (conversationId, receiver, e) => {
    e.preventDefault();
    const res = await fetch(
      `http://localhost:4000/api/v1/message/${conversationId}?senderId=${user?._id}&&receiverId=${receiver?.receiverId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const resData = await res.json();
    setMessages({ messages: resData, receiver, conversationId });
    setIdCon(conversationId);
    setRecive(receiver);
    navigate("/chatscreen");
  };
  const sendMessage = async (e) => {
    setMessage("");
    socket?.emit("sendMessage", {
      senderId: user?._id,
      receiverId: messages?.receiver?.receiverId,
      message,
      conversationId: messages?.conversationId,
    });
    const res = await fetch(`http://localhost:4000/api/v1/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderId: user?._id,
        receiverId: messages?.receiver?.receiverId,
        message,
        conversationId: messages?.conversationId,
      }),
    });
  };

  return (
    <>
      <Routes>
        {token ? (
          <Route
            path="/"
            element={
              <BottomNavigation
                user={user}
                setUser={setUser}
                conversations={conversations}
                messages={messages}
                setMessages={setMessages}
                messageRef={messageRef}
                fetchMessages={fetchMessages}
                users={users}
                message={message}
                setMessage={setMessage}
              />
            }
          />
        ) : (
          <Route path="/" element={<Logo />} />
        )}
        {/* <Route path="/" element={<Logo />} />
        <Route path="/home" element={<BottomNavigation />} /> */}
        <Route path="/share" element={<ShareNavigation />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/phone" element={<Phonelogin />} /> */}
        {/* <Route path="/text" element={<Textcode />} /> */}
        {/* <Route path="/signup-code" element={<SignupCode />} /> */}
        {/* <Route path="/logincode" element={<LoginCode />} /> */}
        {/* <Route path="/emailedcode" element={<EmailCode />} /> */}
        <Route path="/activity" element={<ActivityScreen />} />
        <Route path="/user" element={<User />} />
        <Route path="/changeUserName" element={<ChangeUserName />} />
        <Route path="/updateProfile" element={<UpdateProfilePicture />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/friends" element={<Friends user={user} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profileView/:id" element={<ProfileView />} />
        <Route path="/signup-email" element={<SignupEmail />} />
        <Route path="/paymentsEmpty" element={<PaymentsEmpty />} />
        <Route path="/yourUserName" element={<YouUserName />} />
        <Route path="/transition" element={<Transition />} />
        <Route path="/message" element={<Message />} />
        <Route path="/chat" element={<Chats />} />
        <Route path="/newmessage" element={<NewMessages />} />
        <Route path="/poll" element={<Poll />} />
        <Route
          path="/chatscreen"
          element={
            <ChatScreen
              user={user}
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
              conversationId={idCon}
              receiver={recive}
              messages={messages}
              messageRef={messageRef}
            />
          }
        />

        <Route path="/addCard" element={<AddCard />} />
        <Route path="/pay" element={<Pay user={user} />} />
        <Route path="/amountToPay" element={<AmountToPay />} />
        <Route path="/request" element={<Request user={user} />} />
        <Route path="/amountToRequest" element={<AmountToRequset />} />
        <Route path="/splitPayment" element={<SplitPayment />} />
        <Route path="/splitAmount" element={<SplitAmount />} />
        <Route path="/slipPayment" element={<SlipPayment />} />
        <Route path="/dateSchedule" element={<DateSelSchedul />} />
        <Route path="/group" element={<GroupChat />} />
        <Route path="/location" element={<Location />} />
        <Route path="/sharelocation" element={<ShareLocation />} />
        <Route path="/invitefriend" element={<InviteFriends />} />
        <Route path="/selectpeople" element={<SelectPeople />} />
        <Route path="/addschedule" element={<AddSchedule />} />
        <Route path="/addtolist" element={<AddToList />} />
        <Route path="/emptySchedule" element={<EmptySchedules />} />
        <Route path="/schedules" element={<Schedules />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default Router;
