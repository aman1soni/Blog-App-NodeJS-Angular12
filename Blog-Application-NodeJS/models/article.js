const mongoose = require("mongoose");
const marked = require("marked");
const slugify = require("slugify");

//field schema for database
const articleSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
  },

});

//this pre() runs before saving and convert title to user-friendly slug.
articleSchema.pre("validate", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

//exporting model
module.exports = mongoose.model("Article", articleSchema);
