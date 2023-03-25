import { createStore } from 'vuex';
import { zipcodeModule } from '@/store/zipcodeModule';
import { ipModule } from '@/store/ipModule';

export default createStore({
  modules: {
    zipcode: zipcodeModule,
    ip: ipModule,
  },
});
