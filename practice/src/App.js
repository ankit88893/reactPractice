import React, { useState } from "react";
import Counter from "./hooks/Counter";

import Input from "./hooks/Input";
import Effect from "./hooks/Effect";
import ReducerExapmle from "./hooks/ReducerExample";
import Ref from "./hooks/Ref";

import FocusInput from "./hooks/focusInput";
import Memo from "./hooks/Memo";
import LifeCycle from "./hooks/LifeCycle";
import CallBack from "./hooks/CallBack";
import Toogle from "./hooks/Toogle";

import CounterButtons from "./Context/CounterButton";
import CounterResult from "./Context/CounterResult";
import ValidationForm from "./hooks/ValidationForm";
import Form from './hooks/Form';
import BookList from "./Props/BookList";
import Books from "./Props/Books";
import List from "./Context/practice";
import Forms from "./Context/practice";
import MyForm from "./Context/practice";
import FactorialCalculator from "./Context/UseMemo";
import Memos from "./Context/practice";
import FetchData from "./Context/practice";
import Api from "./Context/api";
import Api1 from "./Context/api";
import Random from "./Context/Api1";
import Practice from "./Context/practice";
import Delete from "./curd/deleting";
import DeleteByIndex from "./curd/deleteByIndex";
import DeletingFromArray from "./curd/DeletingFromArray";
import Update from "./curd/updateobject";


export const CountContext = React.createContext();

function App() {
  const initialCount = 0;

  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <CountContext.Provider value={{ count, setCount, initialCount }}>
        <CounterButtons />
        <CounterResult />
      </CountContext.Provider> */}
      {/* <Memos/> */}
      {/* <FetchData/> */}
      {/* <Api/> */}
      {/* <Random/> */}
      {/* <Practice/> */}
      {/* <Delete/> */}
      {/* <DeleteByIndex/> */}
      {/* <DeletingFromArray/> */}
      {/* <Update/> */}
      

      {/* <ReducerExapmle/> */}
      {/* <Counter/> */}
      {/* <Input/> */}
      {/* <Effect/> */}
      {/* <Ref/> */}
      {/* <FocusInput/> */}
      {/* <Memo/> */}
      {/* <FactorialCalculator/> */}
      {/* <LifeCycle/> */}
      {/* <CallBack/> */}
      {/* <Toogle/> */}
      {/* <ValidationForm/> */}
      {/* <Form/> */}
      {/* < MyForm/> */}
      {/* <BookList/> */}
      {/* <Books/> */}
      
    </div>

  );
}

export default App;
