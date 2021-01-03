type GridSizes = 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type SectionColumn = {
  xs: GridSizes
  sm: GridSizes
  md: GridSizes
  lg: GridSizes
  xl: GridSizes
}

const sectionColumnSize: SectionColumn = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 6,
  xl: 6
}

export default sectionColumnSize
