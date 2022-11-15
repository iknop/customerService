package com.pshc.customerservice.config;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;

@Configuration
@MapperScan(value="com.pshc.customerservice.local.mapper", sqlSessionFactoryRef="slave1SqlSessionFactory")
@EnableTransactionManagement
public class SlaveDataBaseConfig {
    @Bean(name="slave1DataSource")
    @ConfigurationProperties(prefix="spring.sub.datasource")
    public DataSource masterDataSource() {
        //application.properties에서 정의한 DB 연결 정보를 빌드
        return DataSourceBuilder.create().build();
    }

    @Bean(name="slave1SqlSessionFactory")
    public SqlSessionFactory slave1SqlSessionFactory(@Qualifier("slave1DataSource") DataSource slave1DataSource, ApplicationContext applicationContext) throws Exception{
        //세션 생성 시, 빌드된 DataSource를 세팅하고 SQL문을 관리할 mapper.xml의 경로를 알려준다.
        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setDataSource(slave1DataSource);
        sqlSessionFactoryBean.setMapperLocations(applicationContext.getResources("classpath:/mapperLocal/*.xml"));
        return sqlSessionFactoryBean.getObject();
    }

    @Bean(name="slave1SqlSessionTemplate")
    public SqlSessionTemplate slave1SqlSessionTemplate(SqlSessionFactory slave1SqlSessionFactory) throws Exception{
        return new SqlSessionTemplate(slave1SqlSessionFactory);
    }

}