import VList from 'components/list';
import VListItem from 'components/list-item';
import IBlock from 'components/block';

const components = [VList, VListItem , IBlock]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install
