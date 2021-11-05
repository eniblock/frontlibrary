# 0.0.17 (2021-06-15)
### BackTitleComponent
Simplified component

- Remove titleSection, description, bckDescription and pendingValue Input
- Add title input
- Remove ng-content

# 0.0.19 (2021-08-17)
### DataTableComponent
- Extract select filter into another component (SelectFilterComponent)
- Handle observables as mat-option for SelectFilterComponent

# 0.0.20 (2021-08-18)
### SelectFilterComponent
- Handle objects in select filter

# 0.0.21 (2021-11-05)
### DataTableComponent
- Angular 12 upgrade
- Remove filterValue from DataTableFilter interface
- Add applyFilter to DataTableFilter interface
- DataTableComponent now calls applyFilter fn before emitting the values
