import 'core-js/fn/object/assign' // make Object.assign on IE 11
import {StatsApplicationMetricsSource} from './application_metrics_source'

export class StatsTopApplicationMetricsSource extends StatsApplicationMetricsSource {
  params ({dateRange, selectedMetricName = 'hits'}) {
    return Object.assign({}, super.params({dateRange, selectedMetricName}), { metric_name: selectedMetricName })
  }

  _processResponse (response, _options) {
    response.topAppsSelectionPeriod = this.topAppsSelectionPeriod
    return response
  }
}