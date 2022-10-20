export function getChartSignedExtrinsicsQuery(withRange: boolean) {
  return `
SELECT 
  res.count as count,
  datetime
FROM (
    SELECT 
    SUM(agr_res.t_count) as count, 
    datetime
    FROM( 
      SELECT
        ex.total_count::bigint as t_count,
        ex.timestamp as timestamp,
        date_trunc(${withRange ? `$3` : `$1`}, ex.timestamp::timestamptz) as datetime
      FROM extrinsic ex
      ${withRange ? `WHERE ex.timestamp BETWEEN $1 AND $2` : ``}
    ) agr_res
    GROUP BY datetime
    ORDER BY datetime ASC
) res;`;
}
