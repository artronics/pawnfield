export const columns = [
  {
    id: 'id',
    label: 'ID',
  },
  {
    id: 'name',
    label: 'Name',
    cellValue: (customer) => `${customer.firstName} ${customer.lastName}`,
    extraClasses: 'art-capitalize',
  },
  {
    id: 'mobile',
    label: 'Mobile',
  },
];
