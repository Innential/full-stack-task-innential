// import mongoose from 'mongoose';
// import { MongoDataSource } from 'apollo-datasource-mongo';

// export default class extends MongoDataSource {
//   initialize(config) {
//     super.initialize({
//       ...config,
//       debug: true,
//       mongoose
//     });
//   }
//   getBranch(branchId) {
//     return this.Branch.loadOneById(branchId);
//   }

//   getBranches(branchesIds) {
//     return this.Branch.loadManyByIds(branchesIds);
//   }
//   getAll() {
//     return this.Branch.find({});
//   }
// }
