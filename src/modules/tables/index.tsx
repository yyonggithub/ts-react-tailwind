import React, { FC, useState } from "react";
import DocGroup from "../../components/doc-group";
import Table from "../../components/tables";
import Avatar from "../../components/avatar";
import CheckBox from "../../components/checkbox";
const headRows = [
  {
    cells: [
      { value: "Avatar" },
      { value: "First Name" },
      { value: "Last Name" },
      { value: "Address" },
      { value: "State" },
      { value: "Country" },
    ],
  },
];
const bodyRows = [
  {
    cells: [
      {
        align: "text-center",
        avatar:
          "https://mir-s3-cdn-cf.behance.net/user/50/2120565.53b7b9b087a34.jpg",
      },
      { value: "Abbigail" },
      { value: "Sheldon" },
      { class: "text-xs", value: "8657 Gutkowski Walk Suite 303" },
      { value: "Indiana" },
      { value: "Tunisia" },
    ],
  },
  {
    cells: [
      {
        align: "text-center",
        avatar:
          "https://mir-s3-cdn-cf.behance.net/user/50/16348477243045.5a2696cf1af69.jpg",
      },
      { value: "Abbigail" },
      { value: "Isabel" },
      { class: "text-xs", value: "4134 Trantow Inlet Apt. 956Rhode" },
      { value: "Island" },
      { value: "Bahamas" },
    ],
  },
  {
    cells: [
      {
        align: "text-center",
        avatar:
          "https://mir-s3-cdn-cf.behance.net/user/50/06ff593105597.593ed21a0e89f.jpg",
      },
      { value: "Adam" },
      { value: "Antonia" },
      { class: "text-xs", value: "539 Murazik Light Apt. 829" },
      { value: "New Mexico" },
      { value: "Belize" },
    ],
  },
  {
    cells: [
      {
        align: "text-center",
        avatar:
          "https://mir-s3-cdn-cf.behance.net/user/50/1871595.53b692bdc757d.jpg",
      },
      { value: "Adell" },
      { value: "Carmelo" },
      { class: "text-xs", value: "480 Alexandrine Route Suite 726" },
      { value: "North Carolina" },
      { value: "Iraq" },
    ],
  },
];

const select = {
  headRows: [
    {
      cells: [
        { value: "Avatar" },
        { value: "First Name" },
        { value: "Last Name" },
        { value: "Address" },
        { value: "State" },
        { value: "Country" },
      ],
    },
  ],
  bodyRows: [
    {
      checked: false,
      cells: [
        { type: "checkbox" },
        { value: "Abbigail" },
        { value: "Sheldon" },
        { class: "text-xs", value: "8657 Gutkowski Walk Suite 303" },
        { value: "Indiana" },
        { value: "Tunisia" },
      ],
    },
    {
      checked: false,
      cells: [
        { type: "checkbox" },
        { value: "Abbigail" },
        { value: "Isabel" },
        { class: "text-xs", value: "4134 Trantow Inlet Apt. 956Rhode" },
        { value: "Island" },
        { value: "Bahamas" },
      ],
    },
    {
      checked: false,
      cells: [
        { type: "checkbox" },
        { value: "Adam" },
        { value: "Antonia" },
        { class: "text-xs", value: "539 Murazik Light Apt. 829" },
        { value: "New Mexico" },
        { value: "Belize" },
      ],
    },
    {
      checked: false,
      cells: [
        { type: "checkbox" },
        { value: "Adell" },
        { value: "Carmelo" },
        { class: "text-xs", value: "480 Alexandrine Route Suite 726" },
        { value: "North Carolina" },
        { value: "Iraq" },
      ],
    },
  ],
};

const fixed = {
  headFixedRows: [
    {
      cells: [
        { value: "Name" },
        { value: "Date" },
        { value: "Amount" },
        { value: "Company" },
      ],
    },
  ],
  fixedRows: [
    {
      cells: [
        { value: "Kaela" },
        { value: "June" },
        { value: "650.50" },
        { value: "Champlin - Beahan" },
      ],
    },
    {
      cells: [
        { value: "Jo" },
        { value: "December" },
        { value: "796.30" },
        { value: "Schumm and Sons" },
      ],
    },
    {
      cells: [
        { value: "Madisyn" },
        { value: "May" },
        { value: "428.16" },
        { value: "Schiller, Frami and McCullough" },
      ],
    },
    {
      cells: [
        { value: "Darron" },
        { value: "March" },
        { value: "892.01" },
        { value: "Kihn, Ruecker and Cronin" },
      ],
    },
    {
      cells: [
        { value: "General" },
        { value: "December" },
        { value: "426.21" },
        { value: "Howell Inc" },
      ],
    },
    {
      cells: [
        { value: "Jermey" },
        { value: "February" },
        { value: "952.84" },
        { value: "Zboncak and Sons" },
      ],
    },
    {
      cells: [
        { value: "Elwin" },
        { value: "March" },
        { value: "611.93" },
        { value: "Adams Group" },
      ],
    },
    {
      cells: [
        { value: "Aliyah" },
        { value: "January" },
        { value: "208.53" },
        { value: "Rau Group" },
      ],
    },
    {
      cells: [
        { value: "Kyle" },
        { value: "June" },
        { value: "380.14" },
        { value: "Kunze, Brakus and Legros" },
      ],
    },
    {
      cells: [
        { value: "Reid" },
        { value: "October" },
        { value: "898.94" },
        { value: "Kovacek - Senger" },
      ],
    },
    {
      cells: [
        { value: "Mara" },
        { value: "March" },
        { value: "5.44" },
        { value: "Rohan, Reilly and Littel" },
      ],
    },
    {
      cells: [
        { value: "Emile" },
        { value: "April" },
        { value: "420.67" },
        { value: "Zemlak, Romaguera and Eichmann" },
      ],
    },
    {
      cells: [
        { value: "Kaela" },
        { value: "June" },
        { value: "650.50" },
        { value: "Champlin - Beahan" },
      ],
    },
    {
      cells: [
        { value: "Jo" },
        { value: "December" },
        { value: "796.30" },
        { value: "Schumm and Sons" },
      ],
    },
    {
      cells: [
        { value: "Madisyn" },
        { value: "May" },
        { value: "428.16" },
        { value: "Schiller, Frami and McCullough" },
      ],
    },
    {
      cells: [
        { value: "Darron" },
        { value: "March" },
        { value: "892.01" },
        { value: "Kihn, Ruecker and Cronin" },
      ],
    },
    {
      cells: [
        { value: "General" },
        { value: "December" },
        { value: "426.21" },
        { value: "Howell Inc" },
      ],
    },
    {
      cells: [
        { value: "Jermey" },
        { value: "February" },
        { value: "952.84" },
        { value: "Zboncak and Sons" },
      ],
    },
    {
      cells: [
        { value: "Elwin" },
        { value: "March" },
        { value: "611.93" },
        { value: "Adams Group" },
      ],
    },
    {
      cells: [
        { value: "Aliyah" },
        { value: "January" },
        { value: "208.53" },
        { value: "Rau Group" },
      ],
    },
    {
      cells: [
        { value: "Kyle" },
        { value: "June" },
        { value: "380.14" },
        { value: "Kunze, Brakus and Legros" },
      ],
    },
    {
      cells: [
        { value: "Reid" },
        { value: "October" },
        { value: "898.94" },
        { value: "Kovacek - Senger" },
      ],
    },
    {
      cells: [
        { value: "Mara" },
        { value: "March" },
        { value: "5.44" },
        { value: "Rohan, Reilly and Littel" },
      ],
    },
    {
      cells: [
        { value: "Emile" },
        { value: "April" },
        { value: "420.67" },
        { value: "Zemlak, Romaguera and Eichmann" },
      ],
    },
  ],
  footFixedRows: [
    {
      cells: [
        { value: "Total", colspan: 2 },
        { value: "653.64", colspan: 2, align: "text-right" },
      ],
    },
  ],
};

const TableModule: FC = () => {
  const [selectedBodyRow, setSelect] = useState(select.bodyRows);
  const handleClick = (index: number) => {
    console.log(index);
    setSelect((state) => {
      const [...rest] = state;
      rest[index].checked = !rest[index].checked;
      rest[index] = Object.assign({}, rest[index], {
        checked: rest[index].checked,
      });
      return rest;
    });
  };
  return (
    <>
      <DocGroup name="default">
        <Table>
          <Table.thead>
            {headRows.map((row, index) => {
              return (
                <Table.tr key={index}>
                  {row.cells.map((item, idx) => {
                    return (
                      <Table.th key={idx} className={"border-b border-normal"}>
                        {item.value}
                      </Table.th>
                    );
                  })}
                </Table.tr>
              );
            })}
          </Table.thead>
          <Table.tbody>
            {bodyRows.map((row, index) => {
              return (
                <Table.tr key={index} className={"even:bg-gray-1"}>
                  {row.cells.map((item, idx) => {
                    return (
                      <Table.td key={idx}>
                        {item.avatar ? <Avatar image={item.avatar} /> : null}
                        {item.value}
                      </Table.td>
                    );
                  })}
                </Table.tr>
              );
            })}
          </Table.tbody>
        </Table>
      </DocGroup>
      <DocGroup name="selecting">
        <Table>
          <Table.thead>
            {select.headRows.map((row, index) => {
              return (
                <Table.tr key={index}>
                  {row.cells.map((item, idx) => {
                    return (
                      <Table.th key={idx} className={"border-b border-normal"}>
                        {item.value}
                      </Table.th>
                    );
                  })}
                </Table.tr>
              );
            })}
          </Table.thead>
          <Table.tbody>
            {selectedBodyRow.map((row, index) => {
              return (
                <Table.tr
                  key={index}
                  role="checkbox"
                  aria-checked={row.checked}
                  background={
                    row.checked
                      ? "bg-primary-opacity-1 text-primary"
                      : undefined
                  }
                >
                  {row.cells.map((item, idx) => {
                    return (
                      <Table.td key={idx}>
                        {item.type === "checkbox" ? (
                          <CheckBox
                            className={"align-middle"}
                            checked={row.checked}
                            onChange={(e) => {
                              handleClick(index);
                            }}
                          />
                        ) : null}
                        {item.value}
                      </Table.td>
                    );
                  })}
                </Table.tr>
              );
            })}
          </Table.tbody>
        </Table>
      </DocGroup>
      <DocGroup name="fixed">
        <div
          className="overflow-y-auto border rounded border-normal w-full"
          style={{ maxHeight: "500px" }}
        >
          <Table className="w-full">
            <Table.thead>
              {fixed.headFixedRows.map((row, index) => {
                return (
                  <Table.tr key={index}>
                    {row.cells.map((item, idx) => {
                      return (
                        <Table.th
                          key={idx}
                          className={
                            "sticky top-0 z-10 border-b bg-gray-1 border-normal"
                          }
                        >
                          {item.value}
                        </Table.th>
                      );
                    })}
                  </Table.tr>
                );
              })}
            </Table.thead>
            <Table.tbody>
              {fixed.fixedRows.map((row, index) => {
                return (
                  <Table.tr key={index} className="even:bg-gray-1">
                    {row.cells.map((item, idx) => {
                      return <Table.td key={idx}>{item.value}</Table.td>;
                    })}
                  </Table.tr>
                );
              })}
            </Table.tbody>
            <Table.tfoot>
              {fixed.footFixedRows.map((row, index) => {
                return (
                  <Table.tr key={index}>
                    {row.cells.map((item, idx) => {
                      const { value, ...rest } = item;
                      return (
                        <Table.th
                          column={{ ...rest }}
                          key={idx}
                          className="sticky bottom-0 z-10 bg-white border-t border-normal"
                        >
                          {item.value}
                        </Table.th>
                      );
                    })}
                  </Table.tr>
                );
              })}
            </Table.tfoot>
          </Table>
        </div>
      </DocGroup>
    </>
  );
};

TableModule.displayName = "TableModule";

export default TableModule;
