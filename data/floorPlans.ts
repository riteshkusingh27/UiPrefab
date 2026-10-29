export type FloorPlan = {
  id: string
  name: string
  sqft: string
  beds: number
  baths: number
}

export const floorPlans: FloorPlan[] = [
  {
    id: "aspen-plan",
    name: "The Aspen Plan",
    sqft: "1,200 sq ft",
    beds: 3,
    baths: 2,
  },
  {
    id: "meadow-plan",
    name: "The Meadow Plan",
    sqft: "1,450 sq ft",
    beds: 3,
    baths: 2,
  },
  {
    id: "sierra-plan",
    name: "The Sierra Plan",
    sqft: "1,800 sq ft",
    beds: 4,
    baths: 3,
  },
  {
    id: "elm-plan",
    name: "The Elm Plan",
    sqft: "980 sq ft",
    beds: 2,
    baths: 1,
  },
]
