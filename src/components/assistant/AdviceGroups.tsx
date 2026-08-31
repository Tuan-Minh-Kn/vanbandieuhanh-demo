import type { AdviceGroup } from '../../types';
import { RefChip } from '../ui/Chip';
import styles from './AdviceGroups.module.css';

export interface AdviceGroupsProps {
  groups: AdviceGroup[];
  size?: 'md' | 'lg';
}

/** Kết quả tham mưu chia bốn nhóm: việc tham mưu, cần nghiên cứu, việc tiếp theo, điểm chưa rõ. */
export function AdviceGroups({ groups, size = 'md' }: AdviceGroupsProps) {
  const lg = size === 'lg';
  return (
    <div className={[styles.list, lg ? styles.lg : ''].join(' ')}>
      {groups.map((group) => (
        <div key={group.title} className={styles.group}>
          <div className={styles.groupHead} style={{ background: group.bg }}>
            <span className={styles.dot} style={{ background: group.color }} />
            <span className={styles.groupTitle}>{group.title}</span>
            <span className={styles.groupCount}>{group.count}</span>
          </div>
          {group.items.map((item) => (
            <div key={item.no} className={styles.item}>
              <span className={styles.no}>{item.no}</span>
              <div>
                <div className={styles.text}>{item.text}</div>
                {item.refs.length > 0 && (
                  <div className={styles.refs}>
                    {item.refs.map((ref) => (
                      <RefChip key={ref} size={lg ? 'lg' : 'sm'}>
                        {ref}
                      </RefChip>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
