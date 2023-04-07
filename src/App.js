import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Editor from "@monaco-editor/react";
import { createRoot } from "react-dom/client";
import MonacoEditor from "react-monaco-editor";

function App() {
  // const value = {"_id": "619f0a23a834a290ce4fc524", "client_id": "619eff9ba834a290ce4c01b0","date_created": "2022-10-14 07:40:07","date_updated": "2021-01-05 03:27:13"};
  const value = [
    {
      _id: "619f0a23a834a290ce4fc524",
      client_id: "619eff9ba834a290ce4c01b0",
      email: "socialurc@me.com",
      first_name: "Corporate",
      last_name: "Account",
      roles: ["report_generation", "change_password"],
      token: "AQ9jwUevFqBQZBRcsy20uq9YBCd1pVySSzxWQ2oikAiAO5iW1Z0Z5HxXZpLdP8XY",
      address: null,
      role_label_name: null,
      is_user_verified: true,
      user_status: "active",
      created_by: null,
      updated_by: null,
      date_created: "2022-10-14 07:40:07",
      date_updated: "2021-01-05 03:27:13",
    },
    {
      _id: "619f0a23a834a290ce4fda0e",
      client_id: "619eff9ba834a290ce4c01b0",
      email: "URC@me.com",
      first_name: "URC",
      last_name: "Account",
      roles: [
        "manage_users",
        "manage_mailer",
        "report_generation",
        "manage_billing_subscription",
        "change_email",
        "change_password",
      ],
      token: "JNa3NRFiMwT8aYdJroS8G37x1NbEJQqRw3lAwvihCmi20kk0GIt77owj6oSH4eQF",
      address: null,
      role_label_name: null,
      is_user_verified: true,
      user_status: "active",
      created_by: null,
      updated_by: null,
      date_created: "2022-10-14 07:40:07",
      date_updated: null,
    },
    {
      _id: "6396c3d35e591cabc40a067e",
      client_id: "619eff9ba834a290ce4c01b0",
      email: "nbnb12@yahoo.com",
      first_name: "grrrr",
      last_name: "btrrrr",
      roles: ["Publishers"],
      token: "Ae7crV1BsPwY4FDtkTWi9Xaode0h2x8KGuNB6MzRmZQE5jlJUInSq3vCpfaLOydH",
      address: "",
      role_label_name: "Curations",
      is_user_verified: false,
      user_status: "active",
      created_by: "619f0a23a834a290ce4fc524",
      updated_by: null,
      date_created: "2022-12-12 06:01:55",
      date_updated: null,
    },
    {
      _id: "6396c48d975ac38b8b055885",
      client_id: "619eff9ba834a290ce4c01b0",
      email: "could12@yahoo.com",
      first_name: "wish",
      last_name: "could",
      roles: ["Publishers"],
      token: "GtAaYC6ZdDlwSbN4yQXMjBOIcW0rHpUTe3koKnxEB2V9vLRsh7gzideaJ1aPF5uq",
      address: "",
      role_label_name: "Curations",
      is_user_verified: false,
      user_status: "active",
      created_by: "619f0a23a834a290ce4fc524",
      updated_by: null,
      date_created: "2022-12-12 06:05:01",
      date_updated: null,
    },
    {
      _id: "6396c9bc975ac38b8b055886",
      client_id: "619eff9ba834a290ce4c01b0",
      email: "pierce1212@yahoo.com",
      first_name: "",
      last_name: "",
      roles: "",
      token: "eY5Ia8ar0SsRBeQF3OfcWXva6JqqT2CmzwDKLlxgA9hZiENUHPnVpk7dBujMtybd",
      address: "",
      role_label_name: "",
      is_user_verified: false,
      user_status: "active",
      created_by: "619f0a23a834a290ce4fc524",
      updated_by: null,
      date_created: "2022-12-12 06:27:08",
      date_updated: null,
    },
  ];
  // const value = {
  //   _id: "6396caea26b8f1353c0cc029",
  //   client_id: "619eff9ba834a290ce4c01b0",
  //   email: "kokomelong12@yahoo.com",
  //   first_name: "",
  //   last_name: "",
  //   roles: "",
  //   token: "D1e0zEtucrC4a32OxqmdYd5MVkAW6N7BRFQLgv8GjwIoX9blSfhyaUTaPiKZpBHq",
  //   address: "",
  //   role_label_name: "",
  //   is_user_verified: false,
  //   user_status: "active",
  //   created_by: "619f0a23a834a290ce4fc524",
  //   updated_by: null,
  //   date_created: "2022-12-12 06:32:10",
  //   date_updated: null,
  // };
  const myJSON = JSON.stringify(value);
  const editorDidMount = (editor, monaco) => {
    console.log("JJOOJOJOJO");
    setTimeout(function () {
      editor.getAction("editor.action.formatDocument").run();
    }, 300);
  };
  return (
    <div className="App">
      <p>jcsdhdspsd</p>
      <Editor
        height="100vh"
        language="json"
        value={myJSON}
        options={{ readOnly: false, lineNumbers: "on" }}
        onMount={editorDidMount}
      />
    </div>
  );
}

export default App;
