import React from 'react';
import { shallow } from 'enzyme';
import MdTable, {
  TableBody as MdTableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import { Header, Table, TableBody } from '../Table';

describe('<Table/>', () => {
  const columns = [
    {
      id: 'id',
      label: 'ID',
    },
    {
      id: 'name',
      label: 'Name',
      cellValue: (d) => `${d.firstName} ${d.lastName}`,
      extraClasses: 'foo',
    },
    {
      id: 'mobile',
      label: 'Mobile',
    },
  ];
  const data = [
    {id: 12, firstName: 'John', lastName: 'Doe', mobile: '123'},
    {id: 43, firstName: 'Al', lastName: 'Tenner', mobile: '987'},
  ];
  describe('Table header', () => {
    const header = shallow(<Header columns={columns}/>);
    it('should render table header', () => {
      expect(header.find(TableRow).length).toEqual(1);
    });
    it('should render checkbox at first child', () => {
      const cell = header.find(TableCell);
      expect(cell.length).not.toEqual(0);
      expect(cell.first().props().padding).toEqual('checkbox');
    });
    it('should render all provided headers in column plus one for checkbox',
        () => {
          const cell = header.find(TableCell);
          expect(cell.length).toEqual(columns.length + 1);
        });
    // FIXME can't access to key props
    xit('should use id as key', () => {
      const cell = header.find(TableCell);
      console.log(cell.at(1).props());
      expect(cell.props().key).toEqual('id');
    });
    it('should render the label', () => {
      const cell = header.find(TableCell);
      expect(cell.at(1).dive().children().text()).toEqual('ID');
    });
  });
  describe('<TableData/>', () => {
    const onRowSelect = jest.fn();
    const tableData = shallow(
        <TableBody
            data={data}
            columns={columns}
            selectedId={12}
            onRowSelect={onRowSelect}
        />);
    it('should render MdTableBody', () => {
      expect(tableData.find(MdTableBody).length).toEqual(1);
    });
    it('should render data.length rows', () => {
      expect(tableData.find(TableRow).length).toEqual(2);
    });
    // all assertions from now on are on first row
    describe('rows', () => {
      const row = tableData.find(TableRow).first();
      it('should render checkbox as first cell', () => {
        const cell = row.find(TableCell);
        expect(cell.first().props().padding).toEqual('checkbox');
      });
      it('should render a Checkbox on first cell', () => {
        const cb = row.find(TableCell).find(Checkbox);
        expect(cb.length).toEqual(1);
      });
      it('should set checkbox selected to true because of selectedId', () => {
        const cb = row.find(TableCell).find(Checkbox);
        expect(cb.at(0).props().checked).toEqual(true);
        expect(cb.at(1).props().checked).toBeFalsy();
      });
      it('should call onRowSelect with the row id', () => {
        row.simulate('click');
        expect(onRowSelect).toHaveBeenCalledWith(12);
      });
      it('should render columns.length cells plus one for check box', () => {
        const cell = row.find(TableCell);
        expect(cell.length).toEqual(columns.length + 1);
      });
      it('should render row[columns.id] as cell text', () => {
        const cell = row.find(TableCell).at(3); //mobile
        expect(cell.dive().children().text()).toEqual('123');
      });
      it('should call cellValue function if it is defined in columns', () => {
        const cell = row.find(TableCell).at(2); //name
        expect(cell.dive().children().text()).toEqual('John Doe');
      });
      it('should add extraClasses in columns if it is defined', () => {
        const cell = row.find('.foo'); //name
        expect(cell.length).toEqual(1);
      });
    });
  });
  describe('Table', () => {
    const onRowSelect = jest.fn();
    const table = shallow(
        <Table
            columns={columns}
            data={data}
            selectedId={12}
            onRowSelect={onRowSelect}
        />,
    );
    it('should render MdTable', () => {
      expect(table.find(MdTable).length).toEqual(1);
    });
    it('should render TableHead', () => {
      expect(table.find(TableHead).length).toEqual(1);
    });
    it('should render Header', () => {
      expect(table.find(Header).length).toEqual(1);
    });
    it('should pass columns to Header', () => {
      expect(table.find(Header).props().columns).toEqual(columns);
    });
    it('should render TableBody', () => {
      expect(table.find(TableBody).length).toEqual(1);
    });
    it('should pass data prop to TableBody', () => {
      expect(table.find(TableBody).props().data).toEqual(data);
    });
    it('should pass columns prop to TableBody', () => {
      expect(table.find(TableBody).props().columns).toEqual(columns);
    });
    it('should pass selectedId to TableBody', () => {
      expect(table.find(TableBody).props().selectedId).toEqual(12);
    });
    it('should pass onRowSelect to TableBody', () => {
      expect(table.find(TableBody).props().onRowSelect).toEqual(onRowSelect);
    });
  });
});

