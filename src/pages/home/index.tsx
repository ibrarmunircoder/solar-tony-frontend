import { useSolarProducts } from "./hooks";
import { StyledDataGrid } from "pages/home/home.styles";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";

const Home = () => {
  const {
    columns,
    rowCount,
    isLoading,
    rows,
    newConditionCheckboxRef,
    usedConditionCheckboxRef,
    handleOnChange,
    handlePriceSearch,
    handleBrandSearch,
    handleSizeSearch,
    handleConditionSearch,
  } = useSolarProducts();
  return (
    <div className="flex p-3 gap-3">
      <div>
        <fieldset className="condition" onChange={handleConditionSearch}>
          <legend>Condition</legend>
          <label>
            <input
              type="checkbox"
              data-condition="new"
              defaultChecked
              ref={newConditionCheckboxRef}
            />
            New
          </label>
          <label>
            <input
              type="checkbox"
              data-condition="used"
              defaultChecked
              ref={usedConditionCheckboxRef}
            />
            Used
          </label>
        </fieldset>
        <fieldset className="price">
          <legend>Price</legend>
          <span className="block">Under $25</span>
          <span className="block">$25 to $50</span>
          <span className="block">$50 to $100</span>
          <span className="block">$100 to $200</span>
          <span className="block">$200 & Above</span>
          <div className="flex gap-2 mt-2">
            <TextField
              sx={{
                width: "75px",
                "&  fieldset": {
                  width: "75px",
                },
              }}
              name="min"
              onChange={handleOnChange}
              placeholder="Min"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{
                width: "75px",
                "&  fieldset": {
                  width: "75px",
                },
              }}
              name="max"
              onChange={handleOnChange}
              placeholder="Max"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
          </div>
          <button
            onClick={handlePriceSearch}
            className="w-full border border-black rounded-md mt-2 border-solid px-4 py-2"
          >
            Search
          </button>
        </fieldset>
        <fieldset>
          <legend>Brand</legend>
          <TextField
            sx={{
              width: "130px",
              "&  fieldset": {
                width: "130px",
              },
            }}
            name="brand"
            onChange={handleOnChange}
            placeholder="Brand"
            size="small"
          />
          <button
            onClick={handleBrandSearch}
            className="w-full border border-black rounded-md mt-2 border-solid px-4 py-2"
          >
            Search
          </button>
        </fieldset>
        <fieldset>
          <legend>Size</legend>
          <TextField
            sx={{
              width: "130px",
              "&  fieldset": {
                width: "130px",
              },
            }}
            placeholder="Size"
            name="size"
            onChange={handleOnChange}
            size="small"
          />
          <button
            onClick={handleSizeSearch}
            className="w-full border border-black rounded-md mt-2 border-solid px-4 py-2"
          >
            Search
          </button>
        </fieldset>
      </div>
      <div style={{ height: 500, width: "100%" }}>
        <StyledDataGrid
          loading={isLoading}
          getRowId={(row) => row._id}
          columns={columns}
          rows={rows}
          rowCount={rowCount}
          getRowHeight={() => "auto"}
          hideFooterPagination={true}
        />
      </div>
    </div>
  );
};

export default Home;
