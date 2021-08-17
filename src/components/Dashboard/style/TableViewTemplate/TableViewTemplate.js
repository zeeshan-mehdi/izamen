import React from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search
} from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import Button from '@material-ui/core/Button';
import ExportCsvButton from '../../ExportCsvButton/ExportCsvButton.js';
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import ClearButton from '../../ClearButton/ClearButton';
import EmptyArea from '../../EmptyArea/EmptyArea.js';
import AddIcon from '@material-ui/icons/Add';
import { cardViewStyle } from '../design';
const { SearchBar } = Search;
const rowClasses = (row, rowIndex) => {
  const style = {};
  style.backgroundColor="#FFF";
  style.whiteSpace="normal";
  style.overflowWrap="break-word";
  if (row.IsBlocked === "1") {
    style.backgroundColor = '#F5B041';
  }
  return style;
};
export default function TableViewTemplate({
  keyField,
  data,
  columns,
  addButtonText = '',
  tabTitle = '',
  exportCsvButtonShow = false,
  addButtonShow = false,
  addButtonOnClick }) {
  const sizePerPageRenderer = ({
    options,
    currSizePerPage,
    onSizePerPageChange,
  }) => (
      <div className="btn-group" role="group">
        {options.map((option) => {
          const isSelect = currSizePerPage === `${option.page}`;
          return (
            <button
              key={option.text}
              type="button"
              onClick={() => onSizePerPageChange(option.page)}
              className={`btn ${isSelect ? "btn-secondary" : "btn-warning"}`}
            >
              {option.text}
            </button>
          );
        })}
      </div>
    );

  const options = {
    sizePerPageRenderer,
  };
  function indication() {
    return <EmptyArea />;
  }
  return (
    <ToolkitProvider
      keyField={keyField}
      data={data}
      columns={columns}
      search
      exportCSV={ {
        onlyExportFiltered:true,
         exportAll: false 
      } }
      >
      {(props) => (
        <div>
          <div style={cardViewStyle}>
            <h4>Search</h4>
            <SearchBar {...props.searchProps} />
            <ClearButton {...props.searchProps} />
          </div>
          <div style={cardViewStyle}>
            <h4>{tabTitle}</h4>
            {addButtonShow ?
              <Button
                color="primary"
                startIcon={<AddIcon />}
                onClick={addButtonOnClick}
                style={{
                  color: "#fff",
                  backgroundColor: '#4D80E4',
                  width: '15%',
                  marginBottom:'2.5%',
                  whiteSpace: 'nowrap',
                  float:'right'
                }}>
                {addButtonText}
              </Button>
              :
              <></>
            }
          
            <BootstrapTable
              {...props.baseProps}
              bordered={false}
              pagination={paginationFactory(options)}
              noDataIndication={indication}
              rowStyle={rowClasses} />
              
          </div>
          {exportCsvButtonShow ?
                                <ExportCsvButton {...props.csvProps}/>
                                :
                                <></>
                            }
        </div>
      )}
    </ToolkitProvider>
  );
}