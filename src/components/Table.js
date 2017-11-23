import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from 'components/Paper';
import MdTable, {
  TableBody as MdTableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';

const columnsPropType = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  cellValue: PropTypes.func,
  extraClasses: PropTypes.oneOfType(
      [PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
})).isRequired;

const Root = styled(Paper)`
  width: 100%;
`;
export const Header = ({columns}) => (
    <TableRow>
      <TableCell padding='checkbox'></TableCell>
      {columns.map(c => <TableCell key={c.id}>{c.label}</TableCell>)}
    </TableRow>
);
Header.propTypes = {
  columns: columnsPropType,
};

export const TableBody = ({data, columns, selectedId, onRowSelect}) => (
    <MdTableBody>
      {data.map(d => (
          <TableRow key={d.id} onClick={() => onRowSelect(d.id)}>
            <TableCell padding='checkbox'>
              <Checkbox checked={selectedId === d.id}/>
            </TableCell>
            {columns.map(c =>
                <TableCell
                    key={c.id}
                    className={c.extraClasses}
                >
                  {c.cellValue ? c.cellValue(d) : d[c.id]}
                </TableCell>,
            )}
          </TableRow>
      ))}
    </MdTableBody>
);
TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: columnsPropType,
  selectedId: PropTypes.oneOfType(
      [PropTypes.string, PropTypes.number]).isRequired,
  onRowSelect: PropTypes.func.isRequired,
};
export const Table = ({columns, data, selectedId, onRowSelect}) => (
    <Root>
      <MdTable>
        <TableHead>
          <Header columns={columns}/>
        </TableHead>
        <TableBody
            data={data}
            columns={columns}
            selectedId={selectedId}
            onRowSelect={onRowSelect}
        />
      </MdTable>
    </Root>
);
Table.propTypes = {
  columns: columnsPropType,
  ...TableBody.propTypes,
};

export default Table;