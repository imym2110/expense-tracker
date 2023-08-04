import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { setIncomeAction } from "store/expense/expense-slice";

export function IncomeInput(props) {
  const income = useSelector((store) => store.EXPENSE.income);
  const dispatch = useDispatch();
  function setIncome(e) {
    dispatch(setIncomeAction(Number.parseFloat(e.target.value)));
  }
  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          defaultValue={income}
          onChange={setIncome}
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
        />
      </div>
    </div>
  );
}
