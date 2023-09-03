const categoryColorMap = new Map();

categoryColorMap.set("Places in tempo", "orange");
categoryColorMap.set("Tempo powers", "green");
categoryColorMap.set("Tempo characters", "purple");

const getCategoryColor = (category) => {
  return categoryColorMap.get(category);
};

export default getCategoryColor;
