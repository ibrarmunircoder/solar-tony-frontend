import { useEffect, useRef, useState } from "react";
import { solarProductsService } from "shared/services";
import { GridColDef } from "@mui/x-data-grid";
import { SolarPanelProduct } from "shared/types";

type IPageInfo = {
  rows: SolarPanelProduct[];
  rowCount: number;
};

const columns: GridColDef[] = [
  {
    headerName: "Price",
    field: "PriceWithCurrency",
    disableColumnMenu: true,
    width: 90,
    filterable: false,
  },

  {
    headerName: "Brand",
    field: "Brand",
    disableColumnMenu: true,
    width: 142,
    filterable: false,
  },

  {
    headerName: "Condition",
    field: "Condition",
    disableColumnMenu: true,
    width: 110,
    filterable: false,
  },

  {
    field: "Color",
    headerName: "Color",
    sortable: false,
    disableColumnMenu: true,
    width: 80,
    filterable: false,
    renderCell(params) {
      return params.row.Color === "N/A" ? null : params.row.Color;
    },
  },

  {
    field: "Size",
    headerName: "Size",
    sortable: false,
    disableColumnMenu: true,
    width: 120,
    filterable: false,
  },

  {
    field: "Manufacturer",
    headerName: "Manufacturer",
    sortable: false,
    disableColumnMenu: true,
    width: 130,
    filterable: false,
  },

  {
    field: "Title",
    headerName: "Name",
    sortable: true,
    disableColumnMenu: true,
    filterable: false,
    flex: 1,
    renderCell(params) {
      return (
        <a
          className="underline text-blue-500"
          target="__blank"
          href={params?.row?.DetailPageURL}
        >
          {params?.row?.Title}
        </a>
      );
    },
  },
];

const useSolarProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState({
    min: "",
    max: "",
    brand: "",
    size: "",
  });
  const newConditionCheckboxRef = useRef<HTMLInputElement>(null);
  const usedConditionCheckboxRef = useRef<HTMLInputElement>(null);
  const dataRef = useRef<SolarPanelProduct[]>([]);

  const [pageInfo, setPageInfo] = useState<IPageInfo>({
    rows: [],
    rowCount: 0,
  });

  useEffect(() => {
    setIsLoading(true);
    solarProductsService
      .getSolarProducts()
      .then((data) => {
        const products = data as SolarPanelProduct[];
        dataRef.current = products;
        setPageInfo({
          rows: products,
          rowCount: products.length,
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePriceSearch = () => {
    if (filter.min && filter.max) {
      const newProducts = dataRef.current.filter((row) => {
        return (
          parseFloat(row.Price) >= parseFloat(filter.min) &&
          parseFloat(row.Price) <= parseFloat(filter.max)
        );
      });
      setPageInfo(() => ({
        rowCount: newProducts.length,
        rows: newProducts,
      }));
      return;
    }
    if (filter.min) {
      const newProducts = dataRef.current.filter(
        (row) => parseFloat(row.Price) >= parseFloat(filter.min),
      );
      setPageInfo(() => ({
        rowCount: newProducts.length,
        rows: newProducts,
      }));
      return;
    }
    if (filter.max) {
      const newProducts = dataRef.current.filter(
        (row) => parseFloat(row.Price) <= parseFloat(filter.max),
      );
      setPageInfo(() => ({
        rowCount: newProducts.length,
        rows: newProducts,
      }));
      return;
    }
  };

  const handleBrandSearch = () => {
    if (filter.brand) {
      const newProducts = dataRef.current.filter((row) =>
        row.Brand.toLowerCase().startsWith(filter.brand),
      );
      setPageInfo(() => ({
        rowCount: newProducts.length,
        rows: newProducts,
      }));
    }
  };
  const handleSizeSearch = () => {
    if (filter.size) {
      const newProducts = dataRef.current.filter((row) =>
        row.Size.includes(filter.size),
      );
      setPageInfo(() => ({
        rowCount: newProducts.length,
        rows: newProducts,
      }));
    }
  };

  const handleConditionSearch = function (
    event: React.ChangeEvent<HTMLFieldSetElement>,
  ) {
    event.stopPropagation();
    const isNewChecked = newConditionCheckboxRef.current?.checked;
    const isUsedChecked = usedConditionCheckboxRef.current?.checked;
    if (isNewChecked && isUsedChecked) {
      const newProducts = dataRef.current.filter((row) => {
        return (
          row.Condition.toLowerCase() === "new" ||
          row.Condition.toLowerCase() === "used"
        );
      });
      setPageInfo(() => ({
        rowCount: newProducts.length,
        rows: newProducts,
      }));
    } else if (isNewChecked) {
      const newProducts = dataRef.current.filter((row) => {
        return row.Condition.toLowerCase() === "new";
      });
      setPageInfo(() => ({
        rowCount: newProducts.length,
        rows: newProducts,
      }));
    } else if (isUsedChecked) {
      const newProducts = dataRef.current.filter((row) => {
        return row.Condition.toLowerCase() === "used";
      });
      setPageInfo(() => ({
        rowCount: newProducts.length,
        rows: newProducts,
      }));
    } else {
      setPageInfo(() => ({
        rowCount: 0,
        rows: [],
      }));
    }
  };

  return {
    ...pageInfo,
    isLoading,
    columns,
    newConditionCheckboxRef,
    usedConditionCheckboxRef,
    handleOnChange,
    handlePriceSearch,
    handleBrandSearch,
    handleSizeSearch,
    handleConditionSearch,
  };
};

export default useSolarProducts;
