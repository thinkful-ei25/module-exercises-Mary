
const store = (function () {
   let items = [
        { id: cuid(), name: 'apples', checked: false },
        { id: cuid(), name: 'oranges', checked: false },
        { id: cuid(), name: 'milk', checked: true },
        { id: cuid(), name: 'bread', checked: false }
      ];
      let hideCheckedItems = false;
      let searchTerm = '';

      function findByID(id) {
        return store.items.find((item) => item.id === id);
      }

      function addItem(name){
        try{
          Item.validateName(name);
          let validItem = Item.create(name);
          this.items.push(validItem);
        }
        catch (error) {
          console.log(`Cannot add item: ${error.message}`);
        }
      }
      
      function findAndToggleChecked(id){
        let item = this.findByID(id);
        item.checked = !item.checked;
      }

      function findAndUpdateName(id, newName) {
        try{
          Item.validateName(newName)
          let item = this.findByID(id);
          item.name = newName;
        }
        catch (error){
          console.log(`Cannot add item: ${error.message}`);
        }
      }

      function findAndDelete(id){
       this.items = this.items.filter((item) => item.id !== id);
      }

      function toggleCheckedFilter(){
        this.hideCheckedItems = !this.hideCheckedItems;
      }

      function setSearchTerm(searchedTerm){
        this.searchTerm = searchedTerm;
      }

      return {
        items,
        hideCheckedItems,
        searchTerm,
        findByID,
        addItem,
        findAndToggleChecked,
        findAndUpdateName,
        findAndDelete,
        toggleCheckedFilter,
        setSearchTerm
      };

}() );



