/**
 * 修复leaflet地图报错找不到marker icon与shadow问题
 */
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// eslint-disable-next-line no-underscore-dangle
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: import('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: import('leaflet/dist/images/marker-icon.png'),
  shadowUrl: import('leaflet/dist/images/marker-shadow.png'),
});
