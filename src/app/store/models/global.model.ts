export interface Global {
  launches: any[];
  statuses: any[];
  agencies: any[];
  missions: any[];
}

export const globalInitialState: Global = {
  launches: [],
  statuses: [],
  agencies: [],
  missions: []
};
