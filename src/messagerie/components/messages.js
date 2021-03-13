import React from "react";
import Message from "./message";
import rcv from "../../img/receiver.jpg";
import f2 from "../../img/friend2.jpg";
import g1 from "../../img/spongebob.png";
import f3 from "../../img/friend3.jpg";
import f4 from "../../img/friend4.jpg";
import f5 from "../../img/friend5.jpg";
import BNewmsg from "../buttons/bnewmsg";
import Dropmenu from "../others/dropmenu";

const Messages = (props) => {
  const users = props.users;
  return (
    <div className="bg-blue-200">
      <div className="mt-3 mb-4 flex flex-row">
        <div className="flex font-extrabold justify-start w-4/5">
          Last chats{" "}
        </div>
        <div className="flex justify-around w-1/5">
          <BNewmsg />

          <Dropmenu />
        </div>
      </div>
      <div className="overflow-y-scroll h-96 scrollbar">
        {users.map((user) => {
          return (
            <Message
              name={user.convId}
              key={user.convId}
              time="23:19"
              content={user.LastMsg.body}
              img={rcv}
              get_user={(name, img) => props.parentGetUser(name, img)}
              ClickOn={(name) => props.Click(name)}
            />
          );
        })}

        {/* <Message name="Friend1" time="23:19" content="Ahh merci ! j'ai hâte d'y être" img={rcv} />
                <Message name="Friend2" time="20:52" content="Salut !" img={f2} />
                <Message name="Group1" time="17:00" content="T'es ou ??" img={g1} />
                <Message name="Friend3" time="12:22" content="Yo.. D lawan kan" img={f3} />
                <Message name="Friend4" time="Sun  11:46" content="C'est bon je suis passée" img={f4} />
                <Message name="Friend5" time="Fri  07:01" content="Too late" img={f5} /> */}
      </div>
    </div>
  );
};

export default Messages;
