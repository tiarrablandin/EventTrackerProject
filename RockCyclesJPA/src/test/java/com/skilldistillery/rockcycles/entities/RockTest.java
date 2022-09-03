package com.skilldistillery.rockcycles.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class RockTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Rock rock;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("RockCyclesJPA");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		rock = em.find(Rock.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		rock = null;
	}

	@Test
	void test() {
		assertNotNull(rock);
		assertEquals("clear quartz", rock.getName());
		assertEquals("All", rock.getElement());
		assertEquals("Moon, Sun", rock.getPlanet());
		assertTrue(rock.getProperties().contains("mental clarity"));
		assertEquals("sensitive to sunlight", rock.getTips());
		assertEquals(11, rock.getCharged().getDayOfMonth());
		assertEquals(8, rock.getCharged().getMonthValue());
		assertEquals(2022, rock.getCharged().getYear());
		assertEquals(1, rock.getCleansed().getDayOfMonth());
		assertEquals(9, rock.getCleansed().getMonthValue());
		assertEquals(2022, rock.getCleansed().getYear());
	}

}
