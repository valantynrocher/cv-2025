export const CLASSES = {
  sidebarPosition: {
    left: {
      sidebarClassname: "fixed top-0 left-0 border-r flex-col h-full",
      navigationListClassname: "flex-col",
      topBarClassname: "",
      topBarActionsClassname: "",
      topBarAvatarClassname: "",
    },
    top: {
      sidebarClassname:
        "items-center top-0 left-0 border-b w-full h-20 max-h-20",
      navigationListClassname: "",
      topBarClassname: "flex items-center justify-between",
      topBarActionsClassname: "items-center",
      topBarAvatarClassname: "w-16 h-16 m-auto",
    },
    bottom: {
      sidebarClassname:
        "items-center bottom-0 right-0 border-t w-full h-20 max-h-20",
      navigationListClassname: "",
      topBarClassname: "flex items-center justify-between",
      topBarActionsClassname: "items-center",
      topBarAvatarClassname: "w-16 h-16 m-auto",
    },
    right: {
      sidebarClassname: "top-0 right-0 border-l flex-col h-full",
      navigationListClassname: "flex-col",
      topBarClassname: "",
      topBarActionsClassname: "",
      topBarAvatarClassname: "",
    },
  },
  sidebarOpen: {
    left: {
      scrollableContentClassname: "ml-56",
      sidebarClassname: "w-56",
      topBarClassname: "flex items-center justify-between",
      topBarActionsClassname: "",
      topBarAvatarClassname: "w-16 h-16",
    },
    right: {
      scrollableContentClassname: "mr-56",
      sidebarClassname: "w-56",
      topBarClassname: "flex items-center justify-between",
      topBarActionsClassname: "",
      topBarAvatarClassname: "w-16 h-16",
    },
  },
  sidebarClose: {
    left: {
      scrollableContentClassname: "ml-20",
      sidebarClassname: "w-20",
      topBarClassname: "flex flex-col items-center justify-between",
      topBarActionsClassname: "flex-col items-center",
      topBarAvatarClassname: "w-full h-auto m-auto",
    },
    right: {
      scrollableContentClassname: "mr-20",
      sidebarClassname: "w-20",
      topBarClassname: "flex flex-col items-center justify-between",
      topBarActionsClassname: "flex-col items-center",
      topBarAvatarClassname: "w-full h-auto m-auto",
    },
  },
};

export const DEFAULT_SCROLL_PROPS = {
  duration: 500,
  smooth: true,
};
