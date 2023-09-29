import React, { useState } from "react";
import "./splitStyle.css";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
const SplitBill = () => {
  const [form, setForm] = useState(false);
  const [friend, setFriend] = useState(initialFriends);
  const [selectFriend, setSelectFriend] = useState(null);
  console.log(selectFriend);

  function onSelected(selected) {
    if (selected.id === selectFriend?.id) {
      setSelectFriend(null);
    } else {
      setSelectFriend(selected);
      setForm(false);
      console.log("first");
    }
  }
  function onAddfreind(newFriend) {
    setFriend((frind) => [...frind, newFriend]);
    setForm(false);
  }
  function handelSplitBill(value) {
    console.log(value);
    setFriend((friends) =>
      friends.map((elem) =>
        elem.id === selectFriend.id
          ? { ...elem, balance: elem.balance + value }
          : elem
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friend={friend}
          onFreindSelect={onSelected}
          selectFriend={selectFriend}
        />
        {form && <FormAddFreind onAddFreind={onAddfreind} />}
        <Button onClick={() => setForm(!form)}>
          {form ? "Close" : "Add friend"}
        </Button>
      </div>

      {selectFriend && (
        <FormSplitBill
          selectFriend={selectFriend}
          onSplitBill={handelSplitBill}
        />
      )}
    </div>
  );
};

export default SplitBill;
function FriendList({ friend, onFreindSelect, selectFriend }) {
  return (
    <ul>
      {friend.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onFreindSelect={onFreindSelect}
          selectFriend={selectFriend}
        />
      ))}
    </ul>
  );
}
function Friend({ friend, onFreindSelect, selectFriend }) {
  const isSeleted = friend?.id == selectFriend?.id;
  return (
    <li className={isSeleted ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} Owe you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={() => onFreindSelect(friend)}>
        {isSeleted ? `Close` : `Select`}
      </Button>
    </li>
  );
}
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
function FormAddFreind({ onAddFreind }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function handelSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    if (!name || !image) return;
    const newFreind = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFreind(newFreind);
    setName("");
    setImage("https://i.pravatar.cc/48");
    console.log(newFreind);
  }
  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="">🤼 Freind Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="">Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button> add</Button>
    </form>
  );
}

const FormSplitBill = ({ selectFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const friendBill = bill ? bill - userExpense : "";
  const [whoPay, setWhoPay] = useState("user");
  function handelSubmit(e) {
    e.preventDefault();
    if (!bill || !userExpense) return;
    onSplitBill(whoPay === "user" ? friendBill : -userExpense);
  }
  return (
    <form className="form-split-bill" onSubmit={handelSubmit}>
      <h2>Split a bill with {selectFriend.name}</h2>
      <label htmlFor=""> Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label htmlFor="">Your expense</label>
      <input
        type="text"
        value={userExpense}
        onChange={(e) =>
          setUserExpense(
            Number(e.target.value) > bill
              ? setUserExpense
              : Number(e.target.value)
          )
        }
      />
      <label htmlFor=""> {selectFriend.name}'s expense</label>
      <input type="text" disabled value={friendBill} />
      <label htmlFor=""> Who is paying the bill</label>
      <select
        name=""
        id=""
        value={whoPay}
        onChange={(e) => setWhoPay(e.target.value)}
      >
        <option value="user">you</option>
        <option value="friend">{selectFriend.name}</option>
      </select>
      <Button> Split Bill</Button>
    </form>
  );
};
