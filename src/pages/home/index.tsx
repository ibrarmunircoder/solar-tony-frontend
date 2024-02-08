import { useSolarProducts } from "./hooks";
import { StyledDataGrid } from "pages/home/home.styles";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";

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
    handleManufacturerSearch,
    handleConditionSearch,
    handleClearSearch,
  } = useSolarProducts();
  return (
    <>
      <div className="flex p-3 gap-3">
        <div>
          <button
            onClick={handleClearSearch}
            className="w-full text-white bg-black border-none rounded-md mt-2 shadow-md px-4 py-2 mb-8"
          >
            Clear Search
          </button>
          <fieldset className="condition" onChange={handleConditionSearch}>
            <legend>Data source</legend>
            <Link
              style={{ color: "black" }}
              className="font-semibold no-underline"
              to={`/?locale=us`}
            >
              amazon.com
            </Link>
          </fieldset>
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
            <legend>Manufacturer</legend>
            <TextField
              sx={{
                width: "100%",
                "&  fieldset": {
                  width: "100%",
                },
              }}
              name="manufacturer"
              onChange={handleOnChange}
              placeholder="Manufacturer"
              size="small"
            />
            <button
              onClick={handleManufacturerSearch}
              className="w-full border border-black rounded-md mt-2 border-solid px-4 py-2"
            >
              Search
            </button>
          </fieldset>
          {/* <fieldset>
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
          </fieldset> */}
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
          <fieldset id="links">
            <ul>
              <Link to="/faq">
                <li>FAQ</li>
              </Link>
              <Link to="/privacy">
                <li>Privacy policy</li>
              </Link>
            </ul>
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
      <table style={{ display: "none" }}>
        <thead>
          <tr>
            <th>Price</th>
            <th>Brand</th>
            <th>Condition</th>
            <th>Color</th>
            <th>Size</th>
            <th>Manufacturer</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.Price}</td>
              <td>{row.Brand}</td>
              <td>{row.Condition}</td>
              <td>{row.Color}</td>
              <td>{row.Size}</td>
              <td>{row.Manufacturer}</td>
              <td>{row.Title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="p-4 text-sm">
        As an Amazon Associate I earn from qualifying purchases. Product prices
        and availability are accurate as of the date/time indicated and are
        subject to change. Any price and availability information displayed at
        the time of purchase will apply to the purchase of the product. CERTAIN
        CONTENT THAT APPEARS ON THIS SITE COMES FROM AMAZON SERVICES LLC. THIS
        CONTENT IS PROVIDED 'AS IS' AND IS SUBJECT TO CHANGE OR REMOVAL AT ANY
        TIME.
      </footer>
    </>
  );
};

export default Home;
