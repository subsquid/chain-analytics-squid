export function getChartTransferQuery(withRange: boolean) {
  return `
SELECT 
  res.volume as volume,
  res.count as count,
  datetime
FROM (
    SELECT 
    SUM(agr_res.t_volume) as volume, 
    SUM(agr_res.t_count) as count, 
    datetime
    FROM( 
      SELECT
        tr.total_volume::bigint as t_volume,
        tr.total_count::bigint as t_count,
        tr.timestamp as timestamp,
        date_trunc(${withRange ? `$3` : `$1`}, tr.timestamp::timestamptz) as datetime
      FROM transfer tr
      ${withRange ? `WHERE tr.timestamp BETWEEN $1 AND $2` : ``}
    ) agr_res
    GROUP BY datetime
    ORDER BY datetime ASC
) res;`;
}
