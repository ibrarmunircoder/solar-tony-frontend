import { useSolarProducts } from "./hooks";
import { StyledDataGrid } from "pages/home/home.styles";

const Home = () => {
  const { columns, rowCount, rows } = useSolarProducts();
  return (
    <div className="flex p-3 gap-3">
      <div>
        <fieldset className="condition">
          <legend>Condition</legend>
          <label>
            <input type="checkbox" data-condition="new" checked />
            New
          </label>
          <label>
            <input type="checkbox" data-condition="used" checked />
            Used
          </label>
        </fieldset>
      </div>
      <StyledDataGrid
        getRowId={(row) => row._id}
        columns={columns}
        rows={rows}
        rowCount={rowCount}
        getRowHeight={() => "auto"}
        hideFooterPagination={true}
      />
    </div>
  );
};

export default Home;
