import { useState } from "react";
import Field from "./components/Field";
import Header from "./components/Header";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment.js";
function App() {
  const [fieldsValues, setFieldsValues] = useState([10000, 1200, 6, 10]);
  const [resultsData, setResultsData] = useState(
    calculateInvestmentResults({
      initialInvestment: fieldsValues[0],
      annualInvestment: fieldsValues[1],
      expectedReturn: fieldsValues[2],
      duration: fieldsValues[3],
    })
  );

  function onChangeField(index, newValue) {
    setFieldsValues((prevFieldsValues) => {
      const editedFieldsValues = [...prevFieldsValues];
      editedFieldsValues[index] = +newValue;
      const results = calculateInvestmentResults({
        initialInvestment: editedFieldsValues[0],
        annualInvestment: editedFieldsValues[1],
        expectedReturn: editedFieldsValues[2],
        duration: editedFieldsValues[3],
      });
      setResultsData(results);
      return editedFieldsValues;
    });
  }

  return (
    <main>
      <Header></Header>
      <div id="user-input">
        <ol className="input-group">
          <Field
            label="Initial investment"
            initialValue={fieldsValues[0]}
            onChangeField={onChangeField}
            index={0}
          ></Field>
          <Field
            label="Anuual investment"
            initialValue={fieldsValues[1]}
            onChangeField={onChangeField}
            index={1}
          ></Field>
        </ol>
        <ol className="input-group">
          <Field
            label="Expected return"
            initialValue={fieldsValues[2]}
            onChangeField={onChangeField}
            index={2}
          ></Field>
          <Field
            label="Duration"
            initialValue={fieldsValues[3]}
            onChangeField={onChangeField}
            index={3}
          ></Field>
        </ol>
      </div>
      <Results resultsData={resultsData} />
    </main>
  );
}

export default App;
