import { useEffect, useState } from "react";
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
    headerName: "Availability",
    field: "Availability",
    disableColumnMenu: true,
    width: 120,
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

  //   {
  //     headerName: "Height",
  //     disableColumnMenu: true,
  //     field: "Height",
  //     width: 200,
  //     filterable: false,
  //     sortable: false,
  //     renderCell(params) {
  //       return `${params?.row?.Height} ${params?.row?.HeightUnit}`;
  //     },
  //   },
  //   {
  //     headerName: "Width",
  //     disableColumnMenu: true,
  //     field: "Width",
  //     width: 200,
  //     filterable: false,
  //     sortable: false,
  //     renderCell(params) {
  //       return `${params?.row?.Width} ${params?.row?.WidthLength}`;
  //     },
  //   },
  //   {
  //     headerName: "Length",
  //     disableColumnMenu: true,
  //     field: "Length",
  //     width: 200,
  //     filterable: false,
  //     sortable: false,
  //     renderCell(params) {
  //       return `${params?.row?.Length} ${params?.row?.LengthUnit}`;
  //     },
  //   },
];

const useSolarProducts = () => {
  const [pageInfo, setPageInfo] = useState<IPageInfo>({
    rows: [],
    rowCount: 0,
  });

  useEffect(() => {
    solarProductsService
      .getSolarProducts()
      .then((data) => {
        const products = data as SolarPanelProduct[];
        setPageInfo({
          rows: products,
          rowCount: products.length,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return {
    ...pageInfo,
    columns,
  };
};

export default useSolarProducts;
