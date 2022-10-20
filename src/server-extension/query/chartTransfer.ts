export function getChartTransferQuery(withRange: boolean) {
  return `
SELECT 
  res.amount as amount,
  res.count as count,
  datetime
FROM (
    SELECT 
    SUM(agr_res.t_amount) as amount, 
    SUM(agr_res.t_count) as count, 
    datetime
    FROM( 
      SELECT
        tr.total_amount::bigint as t_amount,
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
