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
    <>
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

          <fieldset>
            <legend>Brand</legend>
            <TextField
              sx={{
                width: "100%",
                "&  fieldset": {
                  width: "100%",
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
                width: "100%",
                "&  fieldset": {
                  width: "100%",
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
          <fieldset className="price">
            <legend>Price</legend>
            <span className="block">Under $100</span>
            <span className="block">$100 - $300</span>
            <span className="block">$300 - $500</span>
            <span className="block">$500 - $1000</span>
            <span className="block">$1000 & Above</span>
            <div className="flex flex-wrap gap-2 mt-2">
              <TextField
                sx={{
                  width: "100%",
                  "&  fieldset": {
                    width: "100%",
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
                  width: "100%",
                  "&  fieldset": {
                    width: "100%",
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
        </div>
        <div style={{ minHeight: 500, width: "100%" }}>
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
      <footer className="p-4 text-sm">
        As an Amazon Associate I earn from qualifying purchases. Product prices
        and availability are accurate as of the date/time indicated and are
        subject to change. Any price and availability information displayed at
        the time of purchase will apply to the purchase of the product. CERTAIN
        CONTENT THAT APPEARS ON THIS SITE COMES FROM AMAZON SERVICES LLC. THIS
        CONTENT IS PROVIDED 'AS IS' AND IS SUBJECT TO CHANGE OR REMOVAL AT ANY
        TIME. All other content is Copyright Legitimate Data Company, LLC. All
        rights reserved.
      </footer>
    </>
  );
};

export default Home;
