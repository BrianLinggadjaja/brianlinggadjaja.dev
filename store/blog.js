const publishedSectionsArray = ['2020']

export const state = () => ({
  publishedSections: publishedSectionsArray,
  listings: [],
  sectionIndex: 0,
  blogIndex: 0,
  selectedSection: null,
  selectedBlog: {}
})

export const mutations = {
  initalizeListings (state, listings) {
    state.listings = listings
  },

  selectSection (state, index) {
    state.sectionIndex = index
  },

  updateSection (state) {
    const sectionsReference = state.publishedSections[state.sectionIndex]
    state.selectedSection = sectionsReference
  },

  selectBlog (state, index) {
    state.blogIndex = index
  },

  updateBlog (state) {
    const selectedSectionObject = state.listings[state.sectionIndex][state.selectedSection]
    state.selectedBlog = selectedSectionObject[state.blogIndex]
  }
}

export const getters = {
  listings: (state) => {
    return state.listings
  },

  publishedSections: (state) => {
    return state.publishedSections
  },

  sectionIndex: (state) => {
    return state.sectionIndex
  },

  selectedSection: (state) => {
    return state.selectSection
  },

  blogIndex: (state) => {
    return state.blogIndex
  },

  selectedBlog: (state) => {
    return state.selectedBlog
  }
}
