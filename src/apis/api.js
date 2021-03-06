export const apiUrls = {
  //Authentication
  loginUsername: "api/auth/login",
  loginCustomer: "api/auth/login/table",

  //Customer
  getAllCategories: "api/customer/categories",
  getAllMenus: "api/customer/menu",
  getAllSearchs: "api/search",
  displayFoodInCombo: "api/customer/menu/item/detail",
  addToCartApi: "api/customer/cart/item/add",
  getCartApi: "api/customer/cart",
  deleteFromCartApi: "api/customer/cart/item/delete",
  sendOrderApi: "api/customer/order/send",
  checkQueueOrderApi: "api/waiter/table/order/queue/view",
  viewOrderApi: "api/table/order/confirm/detail",
  callWaiter: "api/customer/call/waiter",
  callPayment: "api/customer/call/payment",
  sendFeedbackApi: "api/customer/feedback",

  //Receptionist
  getNotificationsReceptionist: "api/receptionist/notifications",
  viewFeedbackApi: "api/receptionist/feedback",
  maskAsReadReceptionistApi: "api/receptionist/notifications/read",
  getAllTablesReceptionist: "api/waiter/tables",
  postAddTableReceptionistApi: "api/receptionist/table/new",
  postDeleteTableReceptionistApi: "api/receptionist/table/delete",
  getGenerateQrTableReceptionistApi: "api/receptionist/table/qrcode",
  postEditTableReceptionistApi: "api/receptionist/table/update",
  viewListConfirmOrderReceptionistApi: 'api/order/confirm/list',
  viewDetailConfirmOrderReceptionistApi: 'api/table/order/detail',
  enterVoucherApi: 'api/receptionist/order/confirm/voucher/add',
  invoiceCompletedOrderApi: 'api/receptionist/order/export/bill',
  viewListPaidOrderReceptionistApi: 'api/receptionist/order/completed/list',
  customizeNumberOfItemApi: 'api/receptionist/order/confirm/item/quantity/update',

  //Kitchen Manager
  getNotificationsKitchen: "api/kitchen/notifications",
  maskAsReadKitchenApi: "api/kitchen/notifications/read",
  viewAllDishOfConfirmOrderApi: "api/kitchen/order/dish",
  updateStatusOfDishApi: "api/order/dish/status/update",
  viewListItemApi: 'api/kitchen/items/all',
  updateItemCanBeServeApi: 'api/kitchen/items/update/sold',
  deleteItemInConfirmListApi: 'api/order/dish/delete',

  //Waiter
  getAllTables: "api/waiter/tables",
  postOpenTable: "api/waiter/table/open",
  getTableByID: "api/waiter/table/id",
  getAllNotifications: "api/waiter/table/notifications",
  postUpdateTable: "api/waiter/table/update",
  postCloseTableApi:"api/waiter/table/close",
  postMarkAsReadApi: "api/waiter/table/notifications/read",
  getLogOutApi: "api/auth/logout",
  getQueueOrderApi: "api/waiter/table/order/queue/view",
  postCancelQueueOrderApi: "api/waiter/table/order/queue/cancel",
  postConfirmQueueOrderApi: "api/waiter/table/order/queue/confirm",
  getConfirmedOrderApi: "api/waiter/table/order/confirm/detail/waiter",
  postDeleteItemApi: "api/waiter/table/order/confirm/item/delete",
  postNoteRemainApi: "api/waiter/table/order/confirm/note/add",
  getCheckListApi: "api/waiter/order/drink",
  getCloseTableApi: "api/waiter/table/active/false",
  postChangeTableApi: "api/waiter/table/change",
  postDeleteQueueItemApi: "api/waiter/table/order/queue/item/delete",
  postUpdateDrinkApi: "api/order/drink/status/update",
  postDeleteItemCheckList: "api/order/dish/delete",
  postCustomizeOrder: "api/receptionist/order/confirm/item/quantity/update",
  postCustomizeQueue: "api/waiter/order/queue/item/quantity/update",
  getSearchItem: "api/search",
  // getDetailSearchItem: "api/customer/menu/item/detail",
  postInsertItem: "api/waiter/table/queue/order/insert",
  getFoodList: "api/waiter/table/order/dish",
  getDataDetailItem: "api/waiter/table/dish/detail",
};
